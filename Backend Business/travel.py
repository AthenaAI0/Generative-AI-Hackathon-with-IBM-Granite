import requests
import time
import json


location = "Şarkışla"  


def get_places(location_name):
    url = "http://overpass-api.de/api/interpreter"
    
    # Overpass Query oluşturma
    query = f"""
    [out:json];
    area[name="{location_name}"]->.searchArea;
    node[amenity](area.searchArea);
    out body;
    """
    
    # HTTP POST isteği ile sorguyu gönder
    response = requests.post(url, data={"data": query})
    
    # JSON formatında sonucu al
    if response.status_code == 200:
        return response.json()
    else:
        print("Hata:", response.status_code)
        return None



def get_location_data(location,prompt):

    results = get_places(location)

    print(results)

    # Sonuçları ekrana yazdır


    # Tüm elementleri işleme
    elements_data = []
    sentences = []
    for element in results["elements"]:
        tags = element.get("tags", {})
        element_info = {
            "City": tags.get("addr:city"),
            "Country": tags.get("addr:country"),
            "Housenumber": tags.get("addr:housenumber"),
            "Postcode": tags.get("addr:postcode"),
            "Street": tags.get("addr:street"),
            "Suburb": tags.get("addr:suburb"),
            "Amenity": tags.get("amenity"),
            "Name": tags.get("name"),
            "Outdoor Seating": tags.get("outdoor_seating"),
            "Cards": tags.get("payment:cards"),
            "Cash": tags.get("payment:cash"),
            "Credit Cards": tags.get("payment:credit_cards"),
            "Debit Cards": tags.get("payment:debit_cards"),
            "Toilets for Wheelchair": tags.get("toilets:wheelchair"),
            "Wheelchair": tags.get("wheelchair"),
            "Diet Vegetarian": tags.get("diet:vegetarian")
        }
        elements_data.append(element_info)

        # English Metin oluşturma
        metin = f"The cafe named {element_info['Name']} is located at {element_info['Housenumber']} {element_info['Street']} in {element_info['City']}, {element_info['Country']}. The place is categorized as a {element_info['Amenity']}." \
                f" Suburb: {element_info['Suburb']}, Postcode: {element_info['Postcode']}. Outdoor seating: {element_info['Outdoor Seating']}. " \
                f"Payment options: Cash - {element_info['Cash']}, Cards - {element_info['Cards']}, Credit Cards - {element_info['Credit Cards']}, " \
                f"Debit Cards - {element_info['Debit Cards']}. Wheelchair accessibility: {element_info['Wheelchair']}. " \
                f"Vegetarian options: {element_info['Diet Vegetarian']}, Wheelchair accessible toilets: {element_info['Toilets for Wheelchair']}."
        
        sentences.append(metin)

    # Metin çıktısı

# Sonucu JSON formatında çıktı verme
    result = {
        "Elements": elements_data,
        "Sentences": sentences
    }



    API_KEY = "ju98swd-146JwlR1AC8KZ1iYm5oCeEBAsQfC-F8Sh8z6"
    IAM_URL = "https://iam.cloud.ibm.com/identity/token"

    # Token ve süresini takip etmek için değişkenler
    

    def get_iam_token():
        global iam_token, token_expiry

        iam_token = None
        token_expiry = 0

        # Eğer token süresi dolmuşsa yenile
        if time.time() >= token_expiry:
            print("Yeni IAM Token Alınıyor...")
            response = requests.post(
                IAM_URL,
                data={"grant_type": "urn:ibm:params:oauth:grant-type:apikey", "apikey": API_KEY},
                headers={"Content-Type": "application/x-www-form-urlencoded"},
            )

            if response.status_code != 200:
                raise Exception("IAM token alınamadı: " + response.text)

            # Yeni token ve süresini kaydet
            token_data = response.json()
            iam_token = token_data["access_token"]
            token_expiry = time.time() + token_data["expires_in"]  # expires_in genellikle 3600 (1 saat)

            print("IAM Token Alındı! Geçerlilik süresi: 1 saat")

        return iam_token


    url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29"

    body = {
        "input": f"""<|start_of_role|>system<|end_of_role|>You are Granite, an AI language model developed by IBM in 2024. As a precise and careful assistant, you follow instructions meticulously.

    I want to open a business in a specific location but do not know which type would be the most suitable. Provide recommendations such as \"You should open a restaurant, café, beauty salon, etc.\" Do not suggest already existing businesses—only the category of business.

    Base your recommendations on the following parameters, providing numerical data and insights to determine the best type of business to open:

    Initial Investment: Initial capital, equipment costs (point-of-sale system, cash register, shelves, decoration), and initial stock.
    Monthly Expenses: Rent, infrastructure costs (electricity, water, internet), staff salaries, and regular product purchases.
    Efficiency Parameters: Daily/monthly sales volume, customer count, and product profit margin.
    Profitability: Gross profit and net profit.
    Market Share: Competitive analysis and estimated market share.
    Return on Investment (ROI): Estimated time required to recover the initial investment.
    Analyze location-specific factors such as traffic conditions, crowd density, and general activity levels to make your recommendations. Explain these parameters in detail and include approximate numerical values to estimate the financial performance and efficiency of the business in each suggested category.
    {prompt}. And also give those informations as raw data.<|end_of_text|>\n<|start_of_role|>user<|end_of_role|>{result['Sentences'][0:100]}<|end_of_text|>
    <|start_of_role|>assistant<|end_of_role|>""",
        "parameters": {
            "decoding_method": "greedy",
            "max_new_tokens": 1500,
            "min_new_tokens": 0,
            "repetition_penalty": 1
        },
        "model_id": "ibm/granite-3-8b-instruct",
        "project_id": "d5df4f3f-2bf7-4250-9b44-bbb822270681"
    }

    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": f"Bearer {get_iam_token()}"  # Burada IAM Token Kullanılıyor
    }

    response = requests.post(
        url,
        headers=headers,
        json=body
    )

    if response.status_code != 200:
        raise Exception("Non-200 response: " + str(response.text))



    print("Cevap verildi")
    data =response.json()
    return data