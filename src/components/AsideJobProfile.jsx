import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfile } from "../redux/actions";
import { BsInfoSquareFill, BsChevronDown } from "react-icons/bs";
import "./AsideSharedProfile.css";

const AsideJobProfile = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const profileDetails = useSelector((state) => state.profile.profileDetails);
  const loading = useSelector((state) => state.profile.loading);

  useEffect(() => {
    dispatch(getProfile(userId));
  }, [userId, dispatch]);

  const name = profileDetails?.name || "Utente";
  const surname = profileDetails?.surname || "";
  const title = profileDetails?.title || "Nessun titolo specificato";
  const image = profileDetails?.image || "https://via.placeholder.com/150";

  return (
    <aside className="aside-shared-profile custom-w-rem d-none d-md-block mt-4">
      <div className="card shadow-none border mb-2 rounded-3 overflow-hidden bg-white text-start">
        <img src="/public/imgCopertina.png" alt="" />
        <div className="px-3 pb-3">
          <div className="profile-img-container">
            <img
              src={image}
              alt="Profilo"
              className="rounded-circle border border-2 border-white bg-white"
            />
          </div>
          <div className="pt-2">
            <h6 className=" mb-0 text-dark fs-5 cursor-pointer">
              {loading ? "Caricamento..." : `${name} ${surname}`}
            </h6>
            <p className="text-secondary mb-1 small-text">
              {loading ? "..." : title}
            </p>
            <p className="text-secondary x-small-text mb-2">Italia</p>
          </div>
          <div className="d-flex align-items-center gap-2 pt-2">
            <div
              className="bg-light border"
              style={{ width: "24px", height: "24px", flexShrink: 0 }}
            ></div>
            <span className="fw-bold text-dark x-small-text lh-1">
              {loading ? "..." : title}
            </span>
          </div>
        </div>
      </div>

      <div className="card shadow-none border mb-2 rounded-3 bg-white py-2">
        <div className="d-flex align-items-center gap-3 px-3 py-2">
          <i className="bi bi-list-ul fs-5"></i>
          <span className="fw-bold text-dark small">Preferenze</span>
        </div>
        <div className="d-flex align-items-center gap-3 px-3 py-2 ">
          <i className="bi bi-bookmark-fill fs-5"></i>
          <span className="fw-bold text-dark small">
            Le mie offerte di lavoro
          </span>
        </div>
        <div className="d-flex align-items-center gap-3 px-3 py-2 ">
          <div
            className="premium-square"
            style={{ width: "1.2rem", height: "1.2rem" }}
          ></div>
          <span className="fw-bold text-dark small">
            Le mie informazioni sulla carriera
          </span>
        </div>
        <div className="border-top mt-2 pt-2">
          <div className="d-flex align-items-center gap-3 px-3 py-2 ">
            <i className="bi bi-pencil-square fs-5 text-primary"></i>
            <span className="fw-bold text-primary small">
              Pubblica offerta di lavoro gratuita
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 text-center">
        <div
          className="d-flex flex-wrap justify-content-center gap-2 mb-3"
          style={{ fontSize: "12px" }}
        >
          {[
            "Informazioni",
            "Accessibilità",
            "Centro assistenza",
            "Privacy e condizioni",
            "Opzioni per gli annunci pubblicitari",
            "Pubblicità",
            "Servizi alle aziende",
            "Scarica l'app LinkedIn",
            "Altro",
          ].map((link) => (
            <span
              key={link}
              className="text-secondary cursor-pointer hover-blue"
            >
              {link}
            </span>
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-center gap-2 pb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg"
            alt="Logo"
            width="58"
          />
          <span className="text-dark x-small-text">
            LinkedIn Corporation © 2026
          </span>
        </div>
      </div>
    </aside>
  );
};

export default AsideJobProfile;
