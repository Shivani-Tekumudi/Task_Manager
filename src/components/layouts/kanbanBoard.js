import React, { useState, useEffect } from "react";
import BoardCols from "../UI/boardColumn";
import useTaskStore from "../../store/taskStore";
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';

export default function KanBanBoard() {
    const { tasks, taskData, updateTaskStatus } = useTaskStore();
    const statuses = ["todo", "inprogress", "done"];

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;
        const activeTask = tasks.find((task) => task.id.toString() === active.id);
        if (activeTask && activeTask.status !== over.id) {
            updateTaskStatus(activeTask.id, over.id);
        }
    };

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    useEffect(() => {
        taskData();
    }, []);

    return (
        <div className="bg-white border-radius-18 overflow-auto container-fluid board-shadow py-3 mt-4">
            <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
                <div className="row custom-row">
                    {tasks && statuses.map((ele) => 
                        <BoardCols colTitle={ele} key={ele}/>
                    )}
                </div>
            </DndContext>
        </div>
    );
}
