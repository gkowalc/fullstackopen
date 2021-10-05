const dummy = (blogs) => {
    return 1 
  }
  

const totalLikes =  (blogs) => {
    if (blogs.length === 1) {
    for (const val of blogs) { 
            return val.likes
    }
    }
    else {
     sumOfLikes = 0
     for (const val of blogs) { 
        sumOfLikes = sumOfLikes + val.likes
        
}  
    return sumOfLikes
    }
    
       
      

      

}  



  module.exports = {
    dummy,
    totalLikes
  }