import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import ProjectModal from "./ProjectModal";

export const Card = (project) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="relative rounded-md overflow-hidden group">
      <img
        src={project.imgUrl}
        alt=""
        className="w-80 h-80 object-contain mx-auto"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-0 transition-opacity group-hover:opacity-90 overflow-y-auto">
        <div className="absolute inset-0 p-4 text-white flex flex-col items-stretch justify-evenly">
          <div className="flex flex-wrap items-center mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <button onClick={onOpenModal}>
            <span className="bg-blue-500 text-white p-3 py-1 rounded-md m-3 hover:bg-blue-700">
              Read more...
            </span>
          </button>
        </div>
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          closeOnOverlayClick={true}
          closeOnEsc={true}
          classNames={{
            overlayAnimationIn: "customEnterOverlayAnimation",
            overlayAnimationOut: "customLeaveOverlayAnimation",
            modalAnimationIn: "customEnterModalAnimation",
            modalAnimationOut: "customLeaveModalAnimation",
          }}
          animationDuration={400}
        >
          <ProjectModal project={project}></ProjectModal>
        </Modal>
      </div>
      <h1 className="absolute top-2 left-2 z-5 text-white font-bold px-3 py-1 bg-blue-500 rounded-md">
        {project.title}
      </h1>
    </div>
  );
};
