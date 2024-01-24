import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Course} from "./course";


@Entity({
    name: "LESSONS"
})
export class Lesson {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    duration: string;

    @Column()
    seqNo: string;

    @ManyToOne(() => Course,
        course => course.lessons)
    @JoinColumn({
        name: "courseId"
    })
    course: Course;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    lastUpdatedAt: Date;
}