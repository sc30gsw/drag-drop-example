import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./App.css";

export const App = () => {
	const [items] = useState(["item0", "item1", "item2"]);

	/**
	 * ドラッグ終了時(ドロップ時)にitemの並び替えを行う
	 *
	 * @param result ドラッグ&ドロップの要素
	 */
	const onDragEnd = (result: any) => {
		// ドラッグした要素の位置
		const startIndex = result.source.index;
		// ドロップした位置
		const endIndex = result.destination.index;

		// ドラッグした要素を削除する
		// remove: ["itemN"]
		const remove = items.splice(startIndex, 1);

		// ドラッグした要素をドロップした位置に挿入する
		items.splice(endIndex, 0, remove[0]);
	};

	return (
		<div className="dragDropArea">
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="droppable">
					{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							<Draggable draggableId="item0" index={0}>
								{(provided) => (
									<div
										className="item"
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
									>
										{items[0]}
									</div>
								)}
							</Draggable>
							<Draggable draggableId="item1" index={1}>
								{(provided) => (
									<div
										className="item"
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
									>
										{items[1]}
									</div>
								)}
							</Draggable>
							<Draggable draggableId="item2" index={2}>
								{(provided) => (
									<div
										className="item"
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
									>
										{items[2]}
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
