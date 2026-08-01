import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {

    getAllCourses() {
        return { message: 'All courses fetched successfully', data: [] };
    }

    getCourseById(id: string) {
        return { message: `Course fatch succesfully`, id: id };
    }
    createCourse(dto: CreateCourseDto) {
        return { message: 'Course created successfully', data: dto };
    }
    updateCourse(id: string, dto: UpdateCourseDto) {
        return { message: 'Course updated successfully', id: id, data: dto };
    }
    patchCourse(id: string, dto: UpdateCourseDto) {
        return { message: 'Course Patch Successfully ', id: id, updateedFields: Object.keys(dto) };
    }

    uploadCourseMaterial(id: string, file: Express.Multer.File) {
        return {
            message: 'Material uploaded successfully',
            courseId: id,
            filename: file.filename,
            path: file.path,
        };
    }

    deleteCourse(id: string) {
        return { message: 'Course deleted successfully', id: id };
    }


}

