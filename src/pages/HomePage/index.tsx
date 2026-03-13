import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
	const navigate = useNavigate()

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-4">Loan application</h1>

      <button 
				className="btn btn-primary btn-lg"
				onClick={() => navigate("/personal")}
        type='button'
			>
        Начать оформление
      </button>
    </div>
  );
};