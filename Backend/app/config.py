import os


class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY", "dev-secret-key")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CACHE_TYPE = "SimpleCache"
    API_VERSION = "1.0.0"
    REPORTS_FOLDER = "reports/"


class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///financial.db"


class ProductionConfig(Config):
    DEBUG = False
    
    _db_url = os.environ.get("DATABASE_URL", "sqlite:////tmp/financial.db")
    if _db_url and _db_url.startswith("postgres://"):
        _db_url = _db_url.replace("postgres://", "postgresql://", 1)
        
    SQLALCHEMY_DATABASE_URI = _db_url
    SQLALCHEMY_ENGINE_OPTIONS = {
        "pool_size": 10,
        "max_overflow": 20,
        "pool_pre_ping": True,
    }


config_map = {
    "development": DevelopmentConfig,
    "production": ProductionConfig,
}
