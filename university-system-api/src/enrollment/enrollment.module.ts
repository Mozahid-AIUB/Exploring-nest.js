import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { CourseModule } from '../course/course.module';

@Module({
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  imports: [CourseModule],

})
export class EnrollmentModule { }
