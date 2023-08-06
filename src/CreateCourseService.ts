
/**
 * name - string
 * duration - Number
 * educator - String
 */
class CreateCourseService {

    execute(name: String, duration: Number, educator: String){
        console.log(name, duration, educator);
    }

}

export default new CreateCourseService();