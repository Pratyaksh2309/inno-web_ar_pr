# views.py
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Submission
import json

# Serve the main HTML page
def index(request):
    return render(request, 'index.html')

# Handle data submission
@csrf_exempt  # For testing; remove this in production and handle CSRF properly
def submit_data(request):
    if request.method == "POST":
        try:
            # Parse JSON data from request
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')

            # Create and save a new Submission instance
            submission = Submission(name=name, email=email)
            submission.save()

            return JsonResponse({"message": "Data submitted successfully!"}, status=200)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format."}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Invalid request method."}, status=405)

# Retrieve and return all submissions as JSON
def get_data(request):
    submissions = Submission.objects.all()
    # Serialize the data, returning only fields you need
    data = list(submissions.values('id', 'name', 'email'))
    return JsonResponse(data, safe=False)
