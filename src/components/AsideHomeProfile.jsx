import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getProfile } from "../redux/actions"
import "./AsideSharedProfile.css"

const AsideHomeProfile = () => {
  const dispatch = useDispatch()
  const { userId } = useParams()

  const profileDetails = useSelector((state) => state.profile.profileDetails)
  const loading = useSelector((state) => state.profile.loading)

  useEffect(() => {
    dispatch(getProfile(userId))
  }, [userId, dispatch])

  const name = profileDetails?.name || "Utente"
  const surname = profileDetails?.surname || ""
  const title = profileDetails?.title || "Nessun titolo specificato"
  const image = profileDetails?.image || "https://via.placeholder.com/150"

  return (
    <aside
      className="aside-shared-profile custom-w-rem d-none d-md-block mt-4"
      style={{
        position: "sticky",
        top: "90px", // ora è fixed: Cri
      }}
    >
      <div className="card shadow-none border mb-2 rounded-3 overflow-hidden bg-white text-start">
        <div className="profile-header-bg"></div>
        <div className="px-3 pb-3">
          <div className="profile-img-container">
            <img
              src={image}
              alt="Profilo"
              className="rounded-circle border border-2 border-white bg-white"
            />
          </div>
          <div className="pt-2">
            <h6 className="fs-5 mb-0 text-dark cursor-pointer">
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

      <div className="card shadow-none border mb-2 rounded-3 bg-white p-3 hover-bg-light cursor-pointer">
        <p className="text-secondary mb-0 x-small-text">
          Raggiungi i tuoi obiettivi con Premium
        </p>
        <div className="d-flex align-items-center gap-1">
          <div className="premium-square"></div>
          <span className="fw-bold text-dark x-small-text">
            Prova Premium per 0 EUR
          </span>
        </div>
      </div>

      <div className="card shadow-none border mb-2 rounded-3 bg-white p-3 hover-bg-light cursor-pointer">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="fw-bold text-dark mb-0 x-small-text">Collegamenti</p>
            <p className="text-secondary mb-0 x-small-text">
              Amplia la tua rete
            </p>
          </div>
          <span className="text-primary fw-bold x-small-text">11</span>
        </div>
      </div>

      <div className="card shadow-none border mb-2 rounded-3 bg-white py-2">
        <div className="d-flex align-items-center gap-3 px-3 py-2 cursor-pointer text-start">
          <i className="bi bi-bookmark-fill text-secondary"></i>
          <span className="fw-bold text-dark x-small-text">
            Elementi salvati
          </span>
        </div>
        <div className="d-flex align-items-center gap-3 px-3 py-2 cursor-pointer text-start">
          <i className="bi bi-people-fill text-secondary"></i>
          <span className="fw-bold text-dark x-small-text">Gruppi</span>
        </div>
        <div className="d-flex align-items-center gap-3 px-3 py-2 cursor-pointer text-start">
          <i className="bi bi-newspaper text-secondary"></i>
          <span className="fw-bold text-dark x-small-text">Newsletter</span>
        </div>
        <div className="d-flex align-items-center gap-3 px-3 py-2 cursor-pointer text-start">
          <i className="bi bi-calendar-event text-secondary"></i>
          <span className="fw-bold text-dark x-small-text">Eventi</span>
        </div>
      </div>
    </aside>
  )
}

export default AsideHomeProfile
