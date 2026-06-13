const login=(user)=>{
    if(user.name==="reza" && user.family==="gheybi"){
        return true
    }else{
        return false
    }
}

const register=(user)=> (user , token)

const getme=(token)=> user



const test=()=> false

const addCourse=(course)=>({
        message:"new course added successfully :))"
    })

const removeCourse=(courseID)=>({
        message:"course Removed successfully :))"
    })

const updateCourse=(course , courseID)=>{
    const isUpdated = true
    if (isUpdated) {
        return {
            success: true,
            data: { courseID, course },
            message: "Course updated successfully :))"
        };
    } else {
        return {
            success: false,
            message: "Failed to update course"
        }
    }
}

//Auth