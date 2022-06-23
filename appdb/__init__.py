from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template('home/index.html')

@app.route("/contact")
def contact():
    return render_template('home/contact/contact.html')

@app.route("/danh-muc")
def category():
    return render_template('home/category/product.html')

@app.route("/detail-product")
def detailproduct():
    return render_template('home/category/product-detail.html')