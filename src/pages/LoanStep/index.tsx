import { LoanAmountSlider, LoanDaySlider } from '../../components'

export const LoanStep = () => (
	<>
		<LoanAmountSlider />
  	<LoanDaySlider />
		
		<button type="submit" className="btn btn-primary">
    	Отправить
  	</button>
	</>
)
