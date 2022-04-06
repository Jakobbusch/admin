

export default (el, init_model) => {
    let model = init_model





return {
    el,
    data:{
      
        products:"",

        
        },
    
   
    
    methods:{
     

            async getProducts(){
                

                  const product = await fetch('https://batchelor-project-ikea.herokuapp.com/products').then(res => res.json())
                
                  console.log(product);
                  
                  }
              
   



            }


  }   
}