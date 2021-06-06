import {contextTest, TestState} from '../../context/FormContext'
import {useState, useContext} from 'react'

export const FormConsume = () => {
    const formData = useContext<TestState>(contextTest)

    return <>{formData.f}</>
}

export const FormProc = () => {
    const [formData, formDataSet] = useState<TestState>({
        f: 'mrs',
        l: 'zeko'
    })

    return (
        <contextTest.Provider value={formData} >
<FormConsume />
        </contextTest.Provider>
    )
} 