FROM ubuntu:22.04

# Set the working directory
WORKDIR /app

# Install Python, pip, and other dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    build-essential \
    libpq-dev && \
    apt-get clean

# Create and activate a virtual environment
RUN python3 -m venv /app/venv
ENV PATH="/app/venv/bin:$PATH"

# Copy and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Scrapy project files
COPY . /app

# Set the PYTHONPATH so that the webscraping module is recognized
ENV PYTHONPATH=/app

# Default command to run Scrapy spider
CMD ["scrapy", "crawl", "cherri", "-o", "test.json"]
