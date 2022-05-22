import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./App.css";

export const App = () => {
	return (
		<div>
			<DragDropContext onDragEnd={() => {}}>
				<Droppable droppableId="droppable">
					{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							<Draggable draggableId="item0" index={0}>
								{(provided) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
									>
										item0
									</div>
								)}
							</Draggable>
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};
