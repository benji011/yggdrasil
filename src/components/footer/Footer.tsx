import '~/assets/css/footer/footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Yggdrasil</strong> by{' '}
          <a
            className="footer-a"
            href="https://benjaminlo.io"
            target="_blank"
            rel="noreferrer"
          >
            Benjamin Lo
          </a>
          . The source code is licensed{' '}
          <a
            className="footer-a"
            href="http://opensource.org/licenses/mit-license.php"
            target="_blank"
            rel="noreferrer"
          >
            MIT
          </a>{' '}
          . <br />
          The website is also available on{' '}
          <a
            className="footer-a"
            href="https://github.com/benji011/yggdrasil-chatroom"
            target="_blank"
            rel="noreferrer"
          >
            GitHub.
          </a>{' '}
          Feel free to send me a pull request!
        </p>
      </div>
    </footer>
  )
}
