

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
        test1:"",
        inEdit:'',
        productInEdit:""
        },
    
   
    
    methods:{
        async openForm() {
            document.getElementById("myForm").style.display = "block";
          },
          
          async closeForm() {
            document.getElementById("myForm").style.display = "none";
          },
          async test(t){
            document.getElementById("test").style.display = "block";
            this.inEdit = t;
            this.productInEdit = {id:"",name:"",type:"",price:"",width:"",height:"",weight:""};
            console.log("Setting product index inEdit to: " + this.inEdit);
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
                

                  const getProduct = await fetch(urlDev+'products').then(res => res.json())
                
                  
                    this.product = getProduct;
                  console.log(this.product+ "hello");
                  
                  },

                  async logout(){
                  this.product = null;
                  this.showLogin();
                  this.hideLogout();
                  location.reload();

                  },

              async adminLogin(){


                let admin ='{"username":"'+this.username+'" , '+'"password":"'+ this.psw +'"}';
      

                const getLoginResponse = await fetch(urlDev+'admin/'+admin).then(res => res.json())

                  if(getLoginResponse == true){
                      this.getProducts();
                      this.closeForm();
                      this.showLogin();
                      this.hideLogout();
                  }
                  else{
                    window.alert("Username Or Password Is Incorrect");
                  }
              },
              async updateProduct(){
                const types = ["id","name","type","price","width","height","weight"]
                console.log("Product in edit:" + this.product[this.inEdit].name);
                //this.productInEdit.name = "TestName"
                    
                types.forEach(element => {
                  let b = this.productInEdit[element];
                  if(!b ==""){
                    this.product[this.inEdit][element] =b;
                  }
                  
                  //console.log(b)
                });
                console.log("New -> name:" + this.product[this.inEdit].name + " Type: " +this.product[this.inEdit].type)
                document.getElementById("test").style.display = "none";
                this.inEdit="";
              }
   



            }
          
            


  }   
}