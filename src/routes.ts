import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(req: Request, res: Response) {

    CreateCourseService.execute("NodeJS", 10, "Pedro Pacheco");
    return res.send();
    
}