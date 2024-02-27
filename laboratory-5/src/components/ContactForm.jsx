import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    sex: "",
  });

  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const send = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message || !form.sex) {
      setError("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Пожалуйста, введите действительный адрес электронной почты.");
      return;
    }

    setError("");

    setSubmittedData([...submittedData, form]);

    setForm({
      name: "",
      email: "",
      message: "",
      sex: "",
    });
  };

  const handleGenderChange = (event) => {
    setForm({
      ...form,
      sex: event.target.value,
    });
  };

  return (
    <>
      <form onSubmit={send}>
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <label htmlFor="message">Сообщение:</label>
        <textarea
          name="message"
          id="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          cols="30"
          rows="10"
        ></textarea>

        <label>Пол:</label>
        <label htmlFor="male" style={{ display: 'flex' }}>
          <input
            type="radio"
            id="male"
            name="sex"
            value="male"
            checked={form.sex === "male"}
            onChange={handleGenderChange}
          />
          Мужской
        </label>
        <label htmlFor="female" style={{ display: 'flex' }}>
          <input
            type="radio"
            id="female"
            name="sex"
            value="female"
            checked={form.sex === "female"}
            onChange={handleGenderChange}
          />
          Женский
        </label>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit</button>
      </form>

      {submittedData.length > 0 && (
        <div>
          <h2>Отправленные данные:</h2>
          <table>
            <thead>
              <tr>
                <th>Имя</th>
                <th>Email</th>
                <th>Сообщение</th>
                <th>Пол</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.message}</td>
                  <td>{data.sex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
