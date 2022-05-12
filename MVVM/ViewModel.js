

export default (el, init_model) => {
    let model = init_model





return {
    el,
    data:{
      
        getProduct:model.getProducts

        
        },
    
   
    
    methods:{
     

            async getProducts(){
                

                  const getProduct = await fetch('https://batchelor-project-ikea.herokuapp.com/products').then(res => res.json())
                
                  console.log(getProduct);
                  
                  } 
              
   



            }


  }   
}