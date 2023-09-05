<?php

  $nome = $_POST['nome'];
  $whatsapp = $_POST['whatsapp'];
  $email = $_POST['email'];

  if (empty($nome) || empty($whatsapp)) {
    http_response_code(400);
    echo "Por favor, preencha todos os campos.";
    exit;
  }

  $arquivoCSV = 'contatos.csv';
  $arquivoExiste = file_exists($arquivoCSV);
  $arquivo = fopen($arquivoCSV, 'a');
  if (!$arquivoExiste) {
    fputcsv($arquivo, array('Nome', 'WhatsApp', 'EMail'));
  }
  fputcsv($arquivo, array($nome, $whatsapp, $email));
  fclose($arquivo);

  http_response_code(200);
  echo "Dados salvos com sucesso.";
?>
