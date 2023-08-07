import { useState } from "react";
import "./styles.css";
import axios from "axios";

const Form = () => {
  const baseUrl = "https://api-guellas.vercel.app";

  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  function send() {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    axios
      .post(`${baseUrl}/send`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("Email enviado com sucesso!");
      })
      .catch((response) => {
        alert("Ocorreu um erro, por favor tente novamente");
      });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  };

  const handleClick = (event) => {
    setData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
    event.preventDefault();
    send(data);
  };

  const calculateProgress = () => {
    let value = 0;
    let amountToAdd = 25;

    if (data.fullName) {
      const explodeString = data.fullName.split(" ");
      if (explodeString[1]) {
        value += amountToAdd;
      }
    }
    if (data.phone) {
      let regExPhone =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      if (regExPhone.test(data.phone)) {
        value += amountToAdd;
      }
    }
    if (data.email) {
      let regExEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regExEmail.test(data.email)) {
        value += amountToAdd;
      }
    }
    if (data.message) {
      if (data.message !== " ") {
        value += amountToAdd;
      }
    }

    return value;
  };
  calculateProgress();

  return (
    <>
      <div className="bar-container">
        <div className="bar" style={{ width: `${calculateProgress()}%` }}></div>
      </div>
      <div className="mt-8 bg-primary">
        <form
          onSubmit={handleClick}
          className="bg-[#fff] px-1 mb-10 w-full py-10 sm:w-[400px] shadow-sm shadow-[#ccc] lg:mb-0 xl:min-h-[750px] xl:w-[500px] border border-[#E8E8E8] rounded-[20px] z-[998]"
        >
          <div className="flex items-center justify-center mb-10">
            <img
              src="/email-form.svg"
              alt="Email"
              className="h-[50px] w-[50px]"
            />
            <p className="text-[#374754] text-[1.2rem] font-normal text-center px-2">
              Envie sua mensagem
            </p>
          </div>
          <div className="text-center">
            <div>
              <input
                value={data.fullName}
                onChange={handleChange}
                type="text"
                name="fullName"
                placeholder="Digite seu nome completo"
                className="w-[310px] h-[54px] rounded-[40px] bg-[#F5F5F5] border border-[#E8E8E8] p-5"
              />
            </div>

            <div>
              <input
                type="text"
                name="email"
                placeholder="Digite seu email"
                className="w-[310px] h-[54px] rounded-[40px] bg-[#F5F5F5] border border-[#E8E8E8] p-5 my-10"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Telefone com DDD"
                className="w-[310px] h-[54px] rounded-[40px] bg-[#F5F5F5] border border-[#E8E8E8] p-5 mb-10"
                value={data.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                className="w-[310px] h-[190px] rounded-[20px] bg-[#F5F5F5] border border-[#E8E8E8] p-5 mb-10"
                placeholder="Mensagem..."
                name="message"
                value={data.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <button
                disabled={calculateProgress() !== 100}
                type="submit"
                className={
                  calculateProgress() !== 100
                    ? "w-[310px] bg-[#A9A9A9] font-bold py-auto px-auto rounded-full h-[60px] text-[1.2rem] text-[#fff]"
                    : "w-[310px] bg-primary font-bold py-auto px-auto rounded-full h-[60px] text-[1.2rem] text-[#fff] hover:bg-terciary ease-linear transition delay-50"
                }
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
