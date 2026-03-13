import { GenderSelect, PhoneInput, TextInput } from '../../components'

export const PersonalStep = () => (
	<>
		<PhoneInput />
		<TextInput name="firstName" label="Имя" />
  	<TextInput name="lastName" label="Фамилия" />
		<GenderSelect />
	</>
)
