from fastapi.testclient import TestClient
from app.main import app

client=TestClient(app)

def test_average():
    response=client.post("/average",json={"values":[1,2,3]})
    assert response.status_code == 200
    data=response.json()
    assert data["average"] == 2.0
    

def test_ewma():
    response = client.post("/ewma",json={"values":[1,2,3]})
    assert response.status_code == 200
    data = response.json()
    print("test ran successfully")
    expected_series = [1, 1.2999999999999998, 1.8099999999999996]
    
    assert data["count"] == 3
    assert data["alpha"] == 0.3
    for actual,expected in zip(data["ewma_series"],expected_series):
        assert abs(actual-expected) < 1e-6
    assert abs(data["final"] - expected_series[-1]) < 1e-6
