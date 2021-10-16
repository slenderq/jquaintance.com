
import os
import subprocess

def create_blog_post(root="markdown"):

    markdown_files = os.listdir(f"{root}/")

    print(markdown_files)
    for md in markdown_files:

        filename = md.replace("markdown/","")
        filename = filename.replace(".md", "")


        print(filename)
        html = f"posts/{filename}.html"
        subprocess.run(["pandoc","--standalone", f"{root}/{md}",
        "--template", "markdown_template.html", "-o", html])
    
create_blog_post()