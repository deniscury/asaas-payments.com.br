<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="{{ route('asaas.index') }}">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-dollar-sign"></i>
        </div>
        <div class="sidebar-brand-text mx-3">
            Asaas Payments
        </div>
    </a>
    
    <hr class="sidebar-divider my-0">

    <li class="nav-item active">
        <a class="nav-link" href="{{ route('asaas.index') }}">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
    </li>
    
    <hr class="sidebar-divider">

    <li class="nav-item">
        <a class="nav-link" href="javascript:addClient();">
            <i class="fas fa-fw fa-user"></i>
            <span>Clientes</span>
        </a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="#">
            <i class="fas fa-fw fa-dollar-sign"></i>
            <span>Cobranças</span>
        </a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="route('asaas.payment')">
            <i class="fas fa-fw fa-money-bill"></i>
            <span>Gerar Cobrança</span>
        </a>
    </li>
</ul>
