import React from "react";
import { ModalHospital } from "./ModalHospital";
import { ModalParking } from "./ModalParking";

export function ModalApp(props) {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)

  const {
    modalOpen,
    closeModal,
    hospitalInfo,
    parkingInfo,
    hospitalFavoriteToggle,
    parkingFavoriteToggle,
  } = props;

  console.log(modalOpen); //console 출력
  return (
    <>
      {modalOpen === 1 ? (
        <ModalHospital
          open={modalOpen}
          hospitalInfo={hospitalInfo}
          close={closeModal}
          favorite={hospitalFavoriteToggle}
          header={hospitalInfo.name}
        />
      ) : null}
      {modalOpen === 2 ? (
        <ModalParking
          open={modalOpen}
          parkingInfo={parkingInfo}
          close={closeModal}
          favorite={parkingFavoriteToggle}
          header={parkingInfo.name}
        />
      ) : null}
    </>
  );
}
