<template>
  <div>
    <!-- Header -->
    <header id="home">
        <!-- Background Image -->
        <div class="bg-img" style="background-image: url('./images/background.jpg');">
            <div class="overlay"></div>
        </div>
        <!-- /Background Image -->

        <!-- Nav -->
        <nav id="nav" class="navbar nav-transparent">
            <div class="container">

                <div class="navbar-header">
                    <!-- Logo -->
                    <div class="navbar-brand">
                        <a href="index.html">
                            <!-- <script type="text/javascript">
                                //<![CDATA[
                                window.__mirage2 = {
                                    petok: "89f8896dea34dad8a8fd5f2a28cbb106ec8a3c43-1526996007-1800"
                                };
                                //]]>
                            </script>
                            <script type="text/javascript" src="https://ajax.cloudflare.com/cdn-cgi/scripts/04b3eb47/cloudflare-static/mirage2.min.js"></script> -->
                            <img class="logo" data-cfsrc="img/logo.png" alt="logo" src="images/buscaula-logo-int.png">
                            <img class="logo-alt" data-cfsrc="img/logo-alt.png" alt="logo" src="images/buscaula-logo-int.png">
                        </a>
                    </div>
                    <!-- /Logo -->

                    <!-- Collapse nav button -->
                    <div class="nav-collapse">
                        <span></span>
                    </div>
                    <!-- /Collapse nav button -->
                </div>

                <!--  Main navigation  -->
                <ul class="main-nav nav navbar-nav navbar-right">
                    <li><a href="index.html">home</a></li>
                    <li><a href="#about">oferte seu curso</a></li>
                    <li><a href="#" data-toggle="modal" data-target="#cadastro-modal">cadastrar</a></li>
                    <li class="active"><a href="#" data-toggle="modal" data-target="#login-modal">entrar</a></li>
                </ul>
                <!-- /Main navigation -->

            </div>
        </nav>
        <!-- /Nav -->

        <!-- home wrapper -->
        <div class="home-wrapper">
            <div class="container">
                <div class="row">

                    <!-- home content -->
                    <div class="col-md-10 col-md-offset-1">
                        <div class="home-content">
                            <h1 class="logo-home">BuscAula</h1>

                            <div class="form-group busca-home">
                                <div class="input-group input-group-lg">
                                    <div class="icon-addon addon-lg">
                                        <input type="search" placeholder="Buscar cursos" class="form-control" id="search">
                                        <label for="search" class="glyphicon glyphicon-search" rel="tooltip" title="search"></label>
                                    </div>
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" type="button">Pesquisar</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /home content -->

                </div>
            </div>
        </div>
        <!-- /home wrapper -->

    </header>
    <!-- /Header -->

    <!-- Cursos -->
    <div class="courses-wrapper">
        <div class="container">
            <h2>Cursos <span class="title-effect">Recomendados</span></h2>
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="course">
                        <a href="#">
                            <span class="course-img">
                                <img src="images/curso1.jpg" alt="OAB">
                            </span>
                        </a>
                        <div class="course-details">
                            <a href="#">
                                <span class="course-area">
                                    Jurídico
                                </span>
                                <span class="course-title">
                                    1ª Fase OAB - Exame de Ordem Nacional
                                </span>
                            </a>
                            <span class="course-offerer">
                                Cursinho Target
                            </span>
                            <div class="course-rating">
                                <a href="#" title="1 estrela"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="2 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="3 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="4 estrelas"><span class="fa fa-star"></span></a>
                                <a href="#" title="5 estrelas"><span class="fa fa-star"></span></a>
                            </div>
                            <div class="course-price">
                                <a href="#" role="tooltip" class="tooltip-top btn" aria-label="Adicionar aos favoritos"><i class="fa fa-heart-o"></i> </a>
                                <span>
                                    R$ <b>79,00</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="course">
                        <a href="#">
                            <span class="course-img">
                                <img src="images/curso1.jpg" alt="OAB">
                            </span>
                        </a>
                        <div class="course-details">
                            <a href="#">
                                <span class="course-area">
                                    Jurídico
                                </span>
                                <span class="course-title">
                                    1ª Fase OAB - Exame de Ordem Nacional
                                </span>
                            </a>
                            <span class="course-offerer">
                                Cursinho Target
                            </span>
                            <div class="course-rating">
                                <a href="#" title="1 estrela"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="2 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="3 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="4 estrelas"><span class="fa fa-star"></span></a>
                                <a href="#" title="5 estrelas"><span class="fa fa-star"></span></a>
                            </div>
                            <div class="course-price">
                                <a href="#" role="tooltip" class="tooltip-top btn" aria-label="Adicionar aos favoritos"><i class="fa fa-heart-o"></i> </a>
                                <span>
                                    R$ <b>79,00</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="course">
                        <a href="#">
                            <span class="course-img">
                                <img src="images/curso1.jpg" alt="OAB">
                            </span>
                        </a>
                        <div class="course-details">
                            <a href="#">
                                <span class="course-area">
                                    Jurídico
                                </span>
                                <span class="course-title">
                                    1ª Fase OAB - Exame de Ordem Nacional
                                </span>
                            </a>
                            <span class="course-offerer">
                                Cursinho Target
                            </span>
                            <div class="course-rating">
                                <a href="#" title="1 estrela"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="2 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="3 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="4 estrelas"><span class="fa fa-star"></span></a>
                                <a href="#" title="5 estrelas"><span class="fa fa-star"></span></a>
                            </div>
                            <div class="course-price">
                                <a href="#" role="tooltip" class="tooltip-top btn" aria-label="Adicionar aos favoritos"><i class="fa fa-heart-o"></i> </a>
                                <span>
                                    R$ <b>79,00</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="course">
                        <a href="#">
                            <span class="course-img">
                                <img src="images/curso1.jpg" alt="OAB">
                            </span>
                        </a>
                        <div class="course-details">
                            <a href="#">
                                <span class="course-area">
                                    Jurídico
                                </span>
                                <span class="course-title">
                                    1ª Fase OAB - Exame de Ordem Nacional
                                </span>
                            </a>
                            <span class="course-offerer">
                                Cursinho Target
                            </span>
                            <div class="course-rating">
                                <a href="#" title="1 estrela"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="2 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="3 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="4 estrelas"><span class="fa fa-star"></span></a>
                                <a href="#" title="5 estrelas"><span class="fa fa-star"></span></a>
                            </div>
                            <div class="course-price">
                                <a href="#" role="tooltip" class="tooltip-top btn" aria-label="Adicionar aos favoritos"><i class="fa fa-heart-o"></i> </a>
                                <span>
                                    R$ <b>79,00</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="course">
                        <a href="#">
                            <span class="course-img">
                                <img src="images/curso1.jpg" alt="OAB">
                            </span>
                        </a>
                        <div class="course-details">
                            <a href="#">
                                <span class="course-area">
                                    Jurídico
                                </span>
                                <span class="course-title">
                                    1ª Fase OAB - Exame de Ordem Nacional
                                </span>
                            </a>
                            <span class="course-offerer">
                                Cursinho Target
                            </span>
                            <div class="course-rating">
                                <a href="#" title="1 estrela"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="2 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="3 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="4 estrelas"><span class="fa fa-star"></span></a>
                                <a href="#" title="5 estrelas"><span class="fa fa-star"></span></a>
                            </div>
                            <div class="course-price">
                                <a href="#" role="tooltip" class="tooltip-top btn" aria-label="Adicionar aos favoritos"><i class="fa fa-heart-o"></i> </a>
                                <span>
                                    R$ <b>79,00</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="course">
                        <a href="#">
                            <span class="course-img">
                                <img src="images/curso1.jpg" alt="OAB">
                            </span>
                        </a>
                        <div class="course-details">
                            <a href="#">
                                <span class="course-area">
                                    Jurídico
                                </span>
                                <span class="course-title">
                                    1ª Fase OAB - Exame de Ordem Nacional
                                </span>
                            </a>
                            <span class="course-offerer">
                                Cursinho Target
                            </span>
                            <div class="course-rating">
                                <a href="#" title="1 estrela"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="2 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="3 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="4 estrelas"><span class="fa fa-star"></span></a>
                                <a href="#" title="5 estrelas"><span class="fa fa-star"></span></a>
                            </div>
                            <div class="course-price">
                                <a href="#" role="tooltip" class="tooltip-top btn" aria-label="Adicionar aos favoritos"><i class="fa fa-heart-o"></i> </a>
                                <span>
                                    R$ <b>79,00</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="course">
                        <a href="#">
                            <span class="course-img">
                                <img src="images/curso1.jpg" alt="OAB">
                            </span>
                        </a>
                        <div class="course-details">
                            <a href="#">
                                <span class="course-area">
                                    Jurídico
                                </span>
                                <span class="course-title">
                                    1ª Fase OAB - Exame de Ordem Nacional
                                </span>
                            </a>
                            <span class="course-offerer">
                                Cursinho Target
                            </span>
                            <div class="course-rating">
                                <a href="#" title="1 estrela"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="2 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="3 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="4 estrelas"><span class="fa fa-star"></span></a>
                                <a href="#" title="5 estrelas"><span class="fa fa-star"></span></a>
                            </div>
                            <div class="course-price">
                                <a href="#" role="tooltip" class="tooltip-top btn" aria-label="Adicionar aos favoritos"><i class="fa fa-heart-o"></i> </a>
                                <span>
                                    R$ <b>79,00</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="course">
                        <a href="#">
                            <span class="course-img">
                                <img src="images/curso1.jpg" alt="OAB">
                            </span>
                        </a>
                        <div class="course-details">
                            <a href="#">
                                <span class="course-area">
                                    Jurídico
                                </span>
                                <span class="course-title">
                                    1ª Fase OAB - Exame de Ordem Nacional
                                </span>
                            </a>
                            <span class="course-offerer">
                                Cursinho Target
                            </span>
                            <div class="course-rating">
                                <a href="#" title="1 estrela"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="2 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="3 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="4 estrelas"><span class="fa fa-star"></span></a>
                                <a href="#" title="5 estrelas"><span class="fa fa-star"></span></a>
                            </div>
                            <div class="course-price">
                                <a href="#" role="tooltip" class="tooltip-top btn" aria-label="Adicionar aos favoritos"><i class="fa fa-heart-o"></i> </a>
                                <span>
                                    R$ <b>79,00</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="course">
                        <a href="#">
                            <span class="course-img">
                                <img src="images/curso1.jpg" alt="OAB">
                            </span>
                        </a>
                        <div class="course-details">
                            <a href="#">
                                <span class="course-area">
                                    Jurídico
                                </span>
                                <span class="course-title">
                                    1ª Fase OAB - Exame de Ordem Nacional
                                </span>
                            </a>
                            <span class="course-offerer">
                                Cursinho Target
                            </span>
                            <div class="course-rating">
                                <a href="#" title="1 estrela"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="2 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="3 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="4 estrelas"><span class="fa fa-star"></span></a>
                                <a href="#" title="5 estrelas"><span class="fa fa-star"></span></a>
                            </div>
                            <div class="course-price">
                                <a href="#" role="tooltip" class="tooltip-top btn" aria-label="Adicionar aos favoritos"><i class="fa fa-heart-o"></i> </a>
                                <span>
                                    R$ <b>79,00</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="course">
                        <a href="#">
                            <span class="course-img">
                                <img src="images/curso1.jpg" alt="OAB">
                            </span>
                        </a>
                        <div class="course-details">
                            <a href="#">
                                <span class="course-area">
                                    Jurídico
                                </span>
                                <span class="course-title">
                                    1ª Fase OAB - Exame de Ordem Nacional
                                </span>
                            </a>
                            <span class="course-offerer">
                                Cursinho Target
                            </span>
                            <div class="course-rating">
                                <a href="#" title="1 estrela"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="2 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="3 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="4 estrelas"><span class="fa fa-star"></span></a>
                                <a href="#" title="5 estrelas"><span class="fa fa-star"></span></a>
                            </div>
                            <div class="course-price">
                                <a href="#" role="tooltip" class="tooltip-top btn" aria-label="Adicionar aos favoritos"><i class="fa fa-heart-o"></i> </a>
                                <span>
                                    R$ <b>79,00</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="course">
                        <a href="#">
                            <span class="course-img">
                                <img src="images/curso1.jpg" alt="OAB">
                            </span>
                        </a>
                        <div class="course-details">
                            <a href="#">
                                <span class="course-area">
                                    Jurídico
                                </span>
                                <span class="course-title">
                                    1ª Fase OAB - Exame de Ordem Nacional
                                </span>
                            </a>
                            <span class="course-offerer">
                                Cursinho Target
                            </span>
                            <div class="course-rating">
                                <a href="#" title="1 estrela"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="2 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="3 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="4 estrelas"><span class="fa fa-star"></span></a>
                                <a href="#" title="5 estrelas"><span class="fa fa-star"></span></a>
                            </div>
                            <div class="course-price">
                                <a href="#" role="tooltip" class="tooltip-top btn" aria-label="Adicionar aos favoritos"><i class="fa fa-heart-o"></i> </a>
                                <span>
                                    R$ <b>79,00</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="course">
                        <a href="#">
                            <span class="course-img">
                                <img src="images/curso1.jpg" alt="OAB">
                            </span>
                        </a>
                        <div class="course-details">
                            <a href="#">
                                <span class="course-area">
                                    Jurídico
                                </span>
                                <span class="course-title">
                                    1ª Fase OAB - Exame de Ordem Nacional
                                </span>
                            </a>
                            <span class="course-offerer">
                                Cursinho Target
                            </span>
                            <div class="course-rating">
                                <a href="#" title="1 estrela"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="2 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="3 estrelas"><span class="fa fa-star checked"></span></a>
                                <a href="#" title="4 estrelas"><span class="fa fa-star"></span></a>
                                <a href="#" title="5 estrelas"><span class="fa fa-star"></span></a>
                            </div>
                            <div class="course-price">
                                <a href="#" role="tooltip" class="tooltip-top btn" aria-label="Adicionar aos favoritos"><i class="fa fa-heart-o"></i> </a>
                                <span>
                                    R$ <b>79,00</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /cursos -->

    <!-- Footer -->
    <footer id="footer" class="sm-padding bg-dark">

        <!-- Container -->
        <div class="container">

            <!-- Row -->
            <div class="row">

                <div class="col-md-12">

                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <ul class="menu-footer">
                            <li>
                                <a href="#">Sobre o BuscAula</a>
                            </li>

                            <li>
                                <a href="#">Cadastre o seu curso</a>
                            </li>

                            <li>
                                <a href="#">Relação com investidores</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <ul class="menu-footer">
                            <li>
                                <a href="#">Termos de uso</a>
                            </li>

                            <li>
                                <a href="#">Política de privacidade</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <ul class="menu-footer">
                            <li>
                                <a href="#">Trabalhe conosco</a>
                            </li>

                            <li>
                                <a href="#">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <ul class="footer-follow">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>

                </div>

            </div>
            <!-- /Row -->

        </div>
        <!-- /Container -->

    </footer>
    <!-- footer copyright -->
    <div class="footer-copyright">
        <div class="container">
            <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="logo-footer">
                    <img src="images/buscaula-logo-rodape.png" alt="BuscAula">
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
                <p>Copyright © 2018 - Todos os direitos reservados</p>
            </div>
        </div>
    </div>
    <!-- /footer copyright -->
    <!-- /Footer -->

    <!-- Back to top -->
    <div id="back-to-top"></div>
    <!-- /Back to top -->

    <!-- Preloader -->
    <div id="preloader" style="display: none;">
        <div class="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <!-- /Preloader -->

    <!-- Modal Cadastrar -->
    <div class="modal fade" id="cadastro-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog">
            <div class="loginmodal-container">
                <button data-dismiss="modal" class="close">×</button>
                <h1>Cadastrar</h1>
                <form>
                    <div class="form-group">
                        <label for="nome">Nome</label>
                        <input type="text" name="user" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="nome">Email</label>
                        <input type="email" name="pass" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="nome">Telefone</label>
                        <input type="tel" name="tel" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="nome">Senha</label>
                        <input type="password" name="pass" placeholder="">
                    </div>
                    <input type="submit" name="login" class="login loginmodal-submit" value="Cadastrar">
                </form>

                <div class="login-politica">
                    <p>
                        Ao inscrever-se, você concorda com nossos Termos de uso e nossa <a href="#">Política de privacidade</a>
                    </p>
                </div>

                <div class="login-social">
                    <h4>Conecte-se através de um destes sites</h4>
                    <a href="#" class="btn-facebook">
                        <i class="fa fa-facebook-f"></i> Login com Facebook
                    </a>
                    <a href="#" class="btn-google">
                        <i class="fa fa-google"></i> Login co Google
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Cadastrar -->
    <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog">
            <div class="loginmodal-container">
                <button data-dismiss="modal" class="close">×</button>
                <h1>Entrar</h1>
                <form>
                    <div class="form-group">
                        <label for="nome">Login</label>
                        <input type="text" name="user" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="nome">Senha</label>
                        <input type="password" name="pass" placeholder="">
                    </div>
                    <input type="submit" name="login" class="login loginmodal-submit" value="Cadastrar">
                </form>

                <div class="login-help">
                    <a href="#">Esqueci a senha</a>
                </div>

                <div class="login-social">
                    <h4>Conecte-se através de um destes sites</h4>
                    <a href="#" class="btn-facebook">
                        <i class="fa fa-facebook-f"></i> Login com Facebook
                    </a>
                    <a href="#" class="btn-google">
                        <i class="fa fa-google"></i> Login co Google
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name:"Busca"
}
</script>

<style>

</style>
