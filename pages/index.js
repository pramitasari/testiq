import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <head>
      <title="testiq">
    <head>
    <body>

    <h1>Test IQ</h1>
    <p>klik untuk memulai</p>
    <form>
      <input type="button" value="klik aku untuk memulai" onclick="msg()">
    </form>

    <script>
    function msg() {
      alert("data anda telah dikirim kepada user dzakiy");
    }
    </script>
    </body>


  )
}
