export const validateforms = (email,password,name) =>{

    const validateEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    const validateName =  /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)

    if(!validateEmail){
        return "Email is not valid"
    }

    if(!validatePassword){
        return "Password is not valid"
    
    }

    if(!validateName){
        return "Name is not valid"
    }

    return null;
}