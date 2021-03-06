

export default (el, init_model) => {
    let model = init_model
    let urlProd = 'https://batchelor-project-ikea.herokuapp.com/'
    let urlDev = 'http://localhost:8080/'





return {
    el,
    data:{
      
        product:model.product,
        username:"",
        psw:"",
        admin:"",
        inEdit:'',
        productInEdit:"",
        statistics:'',
        },
    
   
    
    methods:{
        async openForm() {
            document.getElementById("myForm").style.display = "block";
          },
          
          async closeForm() {
            document.getElementById("myForm").style.display = "none";
          },
          async openEdit(t){
            document.getElementById("editFrom").style.display = "block";
            this.inEdit = t;
            this.productInEdit = {id:"",name:"",type:"",price:"",width:"",height:"",weight:""};
            console.log("Setting product index inEdit to: " + this.inEdit);
            document.getElementById("updateDBButton").style.display ="block"
          },
          async hideLogin() {
            document.getElementById("login").style.display = "block";
          },
          async hideLogout() {
            document.getElementById("logout").style.display = "block";
          },
          async showLogin() {
            document.getElementById("login").style.display = "none";
          },
          async showLogout() {
            document.getElementById("logout").style.display = "none";
          },

          
            async getProducts(){
                

                  const getProduct = await fetch(urlProd+'products').then(res => res.json())
                    this.product = getProduct;
                    
                 // console.log(this.product+ "hello");
                  
                  },

                  async logout(){
                  this.product = null;
                  this.showLogin();
                  this.hideLogout();
                  location.reload();

                  },

              async adminLogin(){


                let admin ='{"username":"'+this.username+'" , '+'"password":"'+ this.psw +'"}';
      

                const getLoginResponse = await fetch(urlProd+'admin/'+admin).then(res => res.json())

                  if(getLoginResponse == true){
                      await this.getProducts();
                      this.refreshStatistic();
                      this.closeForm();
                      this.showLogin();
                      this.hideLogout();
                  }
                  else{
                    window.alert("Username Or Password Is Incorrect");
                  }
              },

              async updateDatabase(){
                  console.log("Update database with: " + this.product)
                  document.getElementById("updateDBButton").style.display ="none"
                  document.getElementById("editFrom").style.display ="none"
                  
                                    fetch(urlProd+'updateProducts',  {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json', 'Access-Control-Allow-Origin':urlProd
                    },
                    body: JSON.stringify(this.product),
                  })
                  .then(product => {
                    console.log('Success:', product);
                  })
                  .catch((error) => {
                    console.error('Error:', error);
                  });
                  
              },


              async updateProduct(){
                const types = ["id","name","type","price","width","height","weight"]
                console.log("Product in edit:" + this.product[this.inEdit].name);
        
                    
                types.forEach(element => {
                  let b = this.productInEdit[element];
                  if(!b ==""){
                    this.product[this.inEdit][element] =b;
                  }

                });
                console.log("New -> name:" + this.product[this.inEdit].name + " Type: " +this.product[this.inEdit].type)
                document.getElementById("editFrom").style.display = "none";
                this.inEdit="";
              },

              async refreshStatistic(){
                let temp = this.product;
                temp.sort((a,b)=>{
                    return b.assembly.buildTime - a.assembly.buildTime;
                });
                temp = temp.slice(0,3);

                this.statistics = temp;
                console.log(this.product)

                this.product.sort((a,b)=>{
                  return a.name - b.name;

              });
              console.log(this.product)
                
              }
   



            }
          
            


  }   
}