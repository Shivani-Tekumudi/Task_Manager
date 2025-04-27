import React from "react";
import TaskCard from "./taskCard";
import useTaskStore from "../../store/taskStore";
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

export default function BoardCols({ colTitle }) {
    const { tasks } = useTaskStore();
    const { setNodeRef } = useDroppable({
        id: colTitle,
    });

    const filteredTasks = tasks.filter((task) => task.status === colTitle);

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={`bg-${colTitle} pt-1`}></div>
            <div className="border border-top-4 border-top-danger px-2 bg-custom-light">
                <div className="boardcol-header">
                    {colTitle.toUpperCase()}
                    <hr />
                </div>

                <div
                    ref={setNodeRef}
                    style={{
                        padding: '15px',
                        borderRadius: '8px',
                        minHeight: '500px',
                    }}
                >
                    <SortableContext
                        items={filteredTasks.map((task) => task.id.toString())}
                        strategy={verticalListSortingStrategy}
                    >
                        {filteredTasks.length > 0 ? (
                            filteredTasks.map((task) => (
                                <TaskCard key={task.id} task={task} />
                            ))
                        ) : (
                            <p className="text-center">No Tasks to display</p>
                        )}
                    </SortableContext>
                </div>
            </div>
        </div>
    );
}
