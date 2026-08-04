import http.server
import socketserver
import os
import webbrowser
import sys

if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

print("=" * 65)
print(" [*] MANDIRATES & VYAPAR WEB-DESKTOP APP SERVER RUNNING")
print("=" * 65)
print(f" [*] Localhost URL: http://localhost:{PORT}")
print(" [*] Press Ctrl+C to stop the server.")
print("=" * 65)

webbrowser.open(f"http://localhost:{PORT}")

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[*] Web-Desktop App server stopped.")
