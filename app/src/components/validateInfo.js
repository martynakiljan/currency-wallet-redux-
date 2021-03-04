
export default function validateInfo(values) {

    const errors = {}
    errors.length = 0
    

    if(!values.quality.trim()) {
        errors.length+=1
        errors.quality = "Please enter a quality" 
    }

    if(!values.date.trim()) {
        errors.length+=1
        errors.date = "Please enter a valid buy date"
  
    } 
    if(!values.price) {
        errors.price = "Please enter a price"
        errors.length+=1
    }   
    
   

    return errors;

}