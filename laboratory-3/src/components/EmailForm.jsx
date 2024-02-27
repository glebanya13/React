import { useRef } from "react"

export default function EmailForm() {
    const email = useRef('')

    const validateEmail = (e) => {
        e.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const valid = emailRegex.test(email.current.value)
        if (valid) {
            alert('Успешно отправлено!')
        } else {
            alert('Ошибка!')
        }
    };

    return (
        <>
            <form onSubmit={validateEmail}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={email} required />

                <button type="submit">Отправить</button>
            </form>
        </>
    )
}