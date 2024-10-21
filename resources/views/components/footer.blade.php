                </div>
            </div>

            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Asaas Payments 2024</span>
                    </div>
                </div>
            </footer>
        </div>
    </div> 
    
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <script src="/vendor/jquery/jquery.min.js"></script>
    <script src="/vendor/jquery/jquery.maskMoney.js"></script>
    <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="/vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="/vendor/datatables/jquery.dataTables.min.js"></script>
    <script src="/vendor/datatables/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdn.datatables.net/rowgroup/1.0.2/js/dataTables.rowGroup.min.js"></script>

    <script>
        var urlApi = "{{env('API_URL')}}"
    </script>

    <script src="/js/custom.min.js"></script>
    <script src="/js/alerts.js"></script>
    
    @foreach($scripts as $script)
        <script src="/js/{{$script}}.js"></script>
    @endforeach


</body>

</html>