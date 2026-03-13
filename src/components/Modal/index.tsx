import { useEffect, type ReactNode } from "react"

type Props = {
  show: boolean
  onClose: () => void
  title?: string
  loading?: boolean
  error?: string | null
  children: ReactNode
}

export const Modal = ({
  show,
  onClose,
  title,
  loading = false,
  error = null,
  children
}: Props) => {

  useEffect(() => {
    if (!show) return

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !loading) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEsc)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [show, onClose, loading])

  if (!show) return null

  const handleBackdropClick = () => {
    if (!loading) {
      onClose()
    }
  }

  return (
    <div
      className="modal fade show"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1050
      }}
      onClick={handleBackdropClick}
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              {loading ? "Отправка заявки..." : title}
            </h5>

            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              disabled={loading}
            />
          </div>

          <div className="modal-body">

            {loading && (
              <p className="mb-0 text-center">
                Отправка заявки...
              </p>
            )}

            {error && !loading && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            {!loading && !error && children}

          </div>

          <div className="modal-footer">
            <button
              className="btn btn-primary"
              onClick={onClose}
              disabled={loading}
            >
              Закрыть
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}