import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './App.css'
import Card from './components/card';

interface User {
  id: string;
  nome: string;
  profissao: string;
  likes: number;
  messages: number;
  shares: number;
  telefone: string;
  nascimento: string;
  cidade: string;
  estado: string;
  altura: string;
  iniciais: string;
  peso: number;
  imc: string;
}

function App() {
  const [users, setUsers] = useState([
    {
      id: "98cc7e2d-dd51-45ec-8b6e-d5ba879d0728",
      nome: "Ana Ferreira",
      profissao: "Desenvolvedor Back-end",
      likes: 8792,
      messages: 302,
      shares: 273,
      telefone: "(64) 51955-2455",
      nascimento: "1985-7-28",
      cidade: "Recife",
      estado: "RJ",
      altura: "1,96m",
      imc: "47.12",
      iniciais: "AF",
      peso: 181
    },
    {
      id: "ebdbccf3-d8a8-47f0-873d-8d32efbd7178",
      nome: "André Schneider",
      profissao: "Engenheiro de Software",
      likes: 9669,
      messages: 61,
      shares: 319,
      telefone: "(64) 42192-7138",
      nascimento: "2016-12-9",
      cidade: "Manaus",
      estado: "PR",
      altura: "1,98m",
      imc: "28.82",
      iniciais: "AS",
      peso: 113
    },
    {
      id: "9f02994b-c741-46c9-acfe-671b0041a2ca",
      nome: "André Schneider",
      profissao: "Analista de Sistemas",
      likes: 3346,
      messages: 59,
      shares: 260,
      telefone: "(66) 31037-8628",
      nascimento: "2003-3-8",
      cidade: "Brasília",
      estado: "PE",
      altura: "1,68m",
      imc: "55.63",
      iniciais: "AS",
      peso: 157
    },
    {
      id: "d302f7e5-c717-43e2-995c-c6518f10a259",
      nome: "André Souza",
      profissao: "Analista de Dados",
      likes: 6232,
      messages: 178,
      shares: 456,
      telefone: "(64) 21110-5085",
      nascimento: "1985-4-21",
      cidade: "Fortaleza",
      estado: "PR",
      altura: "1,64m",
      imc: "29.37",
      iniciais: "AS",
      peso: 79
    },
    {
      id: "72d73cf2-af88-4bff-8701-ef27f583ee68",
      nome: "Camila Machado",
      profissao: "Desenvolvedor Back-end",
      likes: 4469,
      messages: 352,
      shares: 406,
      telefone: "(63) 52975-1316",
      nascimento: "2002-1-8",
      cidade: "São Paulo",
      estado: "MG",
      altura: "1,52m",
      imc: "75.74",
      iniciais: "CM",
      peso: 175
    },
    {
      id: "78adf569-bdea-4ac8-81d4-bcfed613d457",
      nome: "Camila Monteiro",
      profissao: "Cientista de Dados",
      likes: 8823,
      messages: 90,
      shares: 30,
      telefone: "(63) 56161-2532",
      nascimento: "2010-9-11",
      cidade: "Curitiba",
      estado: "DF",
      altura: "1,73m",
      imc: "27.06",
      iniciais: "CM",
      peso: 81
    },
    {
      id: "f8699040-91ec-4f2b-a113-a89bb531deb0",
      nome: "Camila Silva",
      profissao: "Engenheiro de Software",
      likes: 4674,
      messages: 193,
      shares: 323,
      telefone: "(61) 46510-9686",
      nascimento: "1980-9-6",
      cidade: "Brasília",
      estado: "BA",
      altura: "1,92m",
      imc: "37.43",
      iniciais: "CS",
      peso: 138
    },
    {
      id: "2247257c-1fe2-42cd-8e1d-dadacee3c06d",
      nome: "Carla Klein",
      profissao: "Arquiteto de Software",
      likes: 6747,
      messages: 222,
      shares: 462,
      telefone: "(62) 31855-7114",
      nascimento: "2001-10-6",
      cidade: "Recife",
      estado: "RJ",
      altura: "1,68m",
      imc: "60.23",
      iniciais: "CK",
      peso: 170
    },
    {
      id: "fe94ad97-baa0-466e-8508-8fb13dd99323",
      nome: "Carla Xavier",
      profissao: "Engenheiro de Software",
      likes: 462,
      messages: 195,
      shares: 208,
      telefone: "(61) 38802-3092",
      nascimento: "2017-4-4",
      cidade: "Rio de Janeiro",
      estado: "PR",
      altura: "1,70m",
      imc: "49.83",
      iniciais: "CX",
      peso: 144
    },
    {
      id: "8b3cdc90-e21c-4e8c-b216-cbb5babf7369",
      nome: "Diego Silva",
      profissao: "Analista de Sistemas",
      likes: 6133,
      messages: 415,
      shares: 388,
      telefone: "(62) 70563-5945",
      nascimento: "2010-6-5",
      cidade: "Brasília",
      estado: "RJ",
      altura: "1,53m",
      imc: "29.48",
      iniciais: "DS",
      peso: 69
    },
  ]);

  return (
    <div className="cards">
      {users.map((user: User) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App
