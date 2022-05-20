

export default (el, init_model) => {
    let model = init_model





return {
    el,
    data:{
      
        product:model.product,
        username:"",
        psw:"",
        admin:"",
        test1:""
        },
    
   
    
    methods:{
        async openForm() {
            document.getElementById("myForm").style.display = "block";
          },
          
          async closeForm() {
            document.getElementById("myForm").style.display = "none";
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

          async login(){

        
          let text ='{"adminUsername":"'+this.username+'" , '+'"adminPassword":"'+ this.psw +'"}';
      

            this.admin = await fetch('http://localhost:8080/admin/'+text).then(res => res.json())
           
      
         
            
            
            console.log(response);
         
            
          },
            async getProducts(){
                

                  const getProduct = await fetch('http://localhost:8080/products').then(res => res.json())
                
                  
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


                let admin ='{"adminUsername":"'+this.username+'" , '+'"adminPassword":"'+ this.psw +'"}';
      

                const getLoginResponse = await fetch('http://localhost:8080/admin/'+admin).then(res => res.json())

                  if(getLoginResponse == true){
                      this.getProducts();
                      this.closeForm();
                      this.showLogin();
                      this.hideLogout();
                  }
                  else{
                    window.alert("Username Or Password Is Incorrect");
                  }
              } 
   



            }
          
            


  }   
}