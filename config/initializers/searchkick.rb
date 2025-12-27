require 'searchkick'
Searchkick.client = OPENSEARCH_CLIENT
# Optionally: Searchkick.index_prefix = Rails.env   # affects index names