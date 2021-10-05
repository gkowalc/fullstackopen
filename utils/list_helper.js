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
const favoriteBlog =  (blogs) => {
    if (blogs.length === 1) {
    for (const val of blogs) { 
            return val.likes
    }
    }
    else {
     maxindex = 0   
     sumOfLikes = 0
     for (var [index, val] of blogs.entries()) { 
        if (val.likes > sumOfLikes) {
            maxindex = index
            sumOfLikes = val.likes
        }
        
}  
return blogs[maxindex]
    }
    
}  

  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}