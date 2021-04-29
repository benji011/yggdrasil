import '~/assets/css/footer/footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Yggdrasil</strong> by{' '}
          <a className="footer-a" href="https://benjaminlo.io">
            Benjamin Lo
          </a>
          . The source code is licensed{' '}
          <a
            className="footer-a"
            href="http://opensource.org/licenses/mit-license.php"
          >
            MIT
          </a>
          . <br />
          The website content is licensed{' '}
          <a
            className="footer-a"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
