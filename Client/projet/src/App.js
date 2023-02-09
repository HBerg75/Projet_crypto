import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { MD5, SHA256, RIPEMD160, AES } from 'crypto-js';

const App = () => {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let selectedHash = '';
    switch (hash) {
      case 'MD5':
        selectedHash = MD5(input).toString();
        break;
      case 'SHA256':
        selectedHash = SHA256(input).toString();
        break;
      case 'RIPEMD160':
        selectedHash = RIPEMD160(input).toString();
        break;
        case 'AES':
        selectedHash = AES(input).toString();
        break;
      default:
        selectedHash = input;
    }
    setInput(selectedHash);
  };

  return (
    <div className="container my-5">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="input">Texte à chiffrer/déchiffrer :</Label>
          <Input type="text" name="input" id="input" value={input} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="hash">Algorithme de chiffrement/hachage :</Label>
          <Input type="select" name="hash" id="hash" value={hash} onChange={(e) => setHash(e.target.value)}>
            <option value="">Aucun</option>
            <option value="MD5">MD5</option>
            <option value="SHA256">SHA256</option>
            <option value="RIPEMD160">RIPEMD160</option>
            <option value="AES">AES</option>
          </Input>
        </FormGroup>
        <Button color="primary">hash/Déchiffrer</Button>
        <p value={input} onChange={handleChange}>{input}</p>
      </Form>
    </div>
  );
};

export default App;
