const url="./assets/img/profile.jpg" 

const Navbar = () => {
  return (
    <nav id="nav-id" class="navbar navbar-expand-lg navbar-black sticky-top">
        <div class="container">
            <a class="navbar-brand" href="">Immanuela</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end pe-5" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#education">Education</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#experience">Experience</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#hobby">Hobby</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar