import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * @param {string} relativePath
 * @returns {string}
 */
function abs(relativePath) {
  return resolve(dirname(fileURLToPath(import.meta.url)), relativePath);
}

export const config = {
  internals: [
    /node\:/,
    /@langchain\/core\//,
    /langchain\//,
    "@rockset/client/dist/codegen/api.js",
    "convex",
    "convex/server",
    "convex/values",
    "discord.js",
    "duck-duck-scrape",
    "firebase-admin/app",
    "firebase-admin/firestore",
    "lunary/langchain",
    "mysql2/promise",
    "pdf-parse/lib/pdf.js/v1.10.100/build/pdf.js",
    "web-auth-library/google",
    "notion-to-md/build/utils/notion.js",
  ],
  entrypoints: {
    load: "src/load/index.ts",
    // tools
    "load/serializable": "src/load/serializable.ts",
    "tools/aiplugin": "src/tools/aiplugin.ts",
    "tools/aws_lambda": "src/tools/aws_lambda.ts",
    "tools/aws_sfn": "src/tools/aws_sfn.ts",
    "tools/bingserpapi": "src/tools/bingserpapi.ts",
    "tools/brave_search": "src/tools/brave_search.ts",
    "tools/duckduckgo_search": "src/tools/duckduckgo_search.ts",
    "tools/calculator": "src/tools/calculator.ts",
    "tools/connery": "src/tools/connery.ts",
    "tools/dadjokeapi": "src/tools/dadjokeapi.ts",
    "tools/discord": "src/tools/discord.ts",
    "tools/dynamic": "src/tools/dynamic.ts",
    "tools/dataforseo_api_search": "src/tools/dataforseo_api_search.ts",
    "tools/gmail": "src/tools/gmail/index.ts",
    "tools/google_calendar": "src/tools/google_calendar/index.ts",
    "tools/google_custom_search": "src/tools/google_custom_search.ts",
    "tools/google_places": "src/tools/google_places.ts",
    "tools/google_routes": "src/tools/google_routes.ts",
    "tools/ifttt": "src/tools/ifttt.ts",
    "tools/searchapi": "src/tools/searchapi.ts",
    "tools/searxng_search": "src/tools/searxng_search.ts",
    "tools/serpapi": "src/tools/serpapi.ts",
    "tools/serper": "src/tools/serper.ts",
    "tools/stackexchange": "src/tools/stackexchange.ts",
    "tools/tavily_search": "src/tools/tavily_search.ts",
    "tools/wikipedia_query_run": "src/tools/wikipedia_query_run.ts",
    "tools/wolframalpha": "src/tools/wolframalpha.ts",
    // toolkits
    "agents/toolkits/aws_sfn": "src/agents/toolkits/aws_sfn.ts",
    "agents/toolkits/base": "src/agents/toolkits/base.ts",
    "agents/toolkits/connery": "src/agents/toolkits/connery/index.ts",
    // embeddings
    "embeddings/alibaba_tongyi": "src/embeddings/alibaba_tongyi.ts",
    "embeddings/baidu_qianfan": "src/embeddings/baidu_qianfan.ts",
    "embeddings/bedrock": "src/embeddings/bedrock.ts",
    "embeddings/cloudflare_workersai": "src/embeddings/cloudflare_workersai.ts",
    "embeddings/cohere": "src/embeddings/cohere.ts",
    "embeddings/fireworks": "src/embeddings/fireworks.ts",
    "embeddings/googlepalm": "src/embeddings/googlepalm.ts",
    "embeddings/googlevertexai": "src/embeddings/googlevertexai.ts",
    "embeddings/gradient_ai": "src/embeddings/gradient_ai.ts",
    "embeddings/hf": "src/embeddings/hf.ts",
    "embeddings/hf_transformers": "src/embeddings/hf_transformers.ts",
    "embeddings/llama_cpp": "src/embeddings/llama_cpp.ts",
    "embeddings/minimax": "src/embeddings/minimax.ts",
    "embeddings/ollama": "src/embeddings/ollama.ts",
    "embeddings/premai": "src/embeddings/premai.ts",
    "embeddings/tensorflow": "src/embeddings/tensorflow.ts",
    "embeddings/togetherai": "src/embeddings/togetherai.ts",
    "embeddings/voyage": "src/embeddings/voyage.ts",
    "embeddings/zhipuai": "src/embeddings/zhipuai.ts",
    // llms
    "llms/ai21": "src/llms/ai21.ts",
    "llms/aleph_alpha": "src/llms/aleph_alpha.ts",
    "llms/bedrock": "src/llms/bedrock/index.ts",
    "llms/bedrock/web": "src/llms/bedrock/web.ts",
    "llms/cloudflare_workersai": "src/llms/cloudflare_workersai.ts",
    "llms/cohere": "src/llms/cohere.ts",
    "llms/fireworks": "src/llms/fireworks.ts",
    "llms/friendli": "src/llms/friendli.ts",
    "llms/googlepalm": "src/llms/googlepalm.ts",
    "llms/googlevertexai": "src/llms/googlevertexai/index.ts",
    "llms/googlevertexai/web": "src/llms/googlevertexai/web.ts",
    "llms/gradient_ai": "src/llms/gradient_ai.ts",
    "llms/hf": "src/llms/hf.ts",
    "llms/llama_cpp": "src/llms/llama_cpp.ts",
    "llms/ollama": "src/llms/ollama.ts",
    "llms/portkey": "src/llms/portkey.ts",
    "llms/raycast": "src/llms/raycast.ts",
    "llms/replicate": "src/llms/replicate.ts",
    "llms/sagemaker_endpoint": "src/llms/sagemaker_endpoint.ts",
    "llms/togetherai": "src/llms/togetherai.ts",
    "llms/watsonx_ai": "src/llms/watsonx_ai.ts",
    "llms/writer": "src/llms/writer.ts",
    "llms/yandex": "src/llms/yandex.ts",
    "llms/layerup_security": "src/llms/layerup_security.ts",
    // vectorstores
    "vectorstores/analyticdb": "src/vectorstores/analyticdb.ts",
    "vectorstores/astradb": "src/vectorstores/astradb.ts",
    "vectorstores/azure_aisearch": "src/vectorstores/azure_aisearch.ts",
    "vectorstores/azure_cosmosdb": "src/vectorstores/azure_cosmosdb.ts",
    "vectorstores/cassandra": "src/vectorstores/cassandra.ts",
    "vectorstores/chroma": "src/vectorstores/chroma.ts",
    "vectorstores/clickhouse": "src/vectorstores/clickhouse.ts",
    "vectorstores/closevector/node": "src/vectorstores/closevector/node.ts",
    "vectorstores/closevector/web": "src/vectorstores/closevector/web.ts",
    "vectorstores/cloudflare_vectorize": "src/vectorstores/cloudflare_vectorize.ts",
    "vectorstores/convex": "src/vectorstores/convex.ts",
    "vectorstores/couchbase": "src/vectorstores/couchbase.ts",
    "vectorstores/elasticsearch": "src/vectorstores/elasticsearch.ts",
    "vectorstores/faiss": "src/vectorstores/faiss.ts",
    "vectorstores/googlevertexai": "src/vectorstores/googlevertexai.ts",
    "vectorstores/hnswlib": "src/vectorstores/hnswlib.ts",
    "vectorstores/hanavector": "src/vectorstores/hanavector.ts",
    "vectorstores/lancedb": "src/vectorstores/lancedb.ts",
    "vectorstores/milvus": "src/vectorstores/milvus.ts",
    "vectorstores/momento_vector_index": "src/vectorstores/momento_vector_index.ts",
    "vectorstores/mongodb_atlas": "src/vectorstores/mongodb_atlas.ts",
    "vectorstores/myscale": "src/vectorstores/myscale.ts",
    "vectorstores/neo4j_vector": "src/vectorstores/neo4j_vector.ts",
    "vectorstores/neon": "src/vectorstores/neon.ts",
    "vectorstores/opensearch": "src/vectorstores/opensearch.ts",
    "vectorstores/pgvector": "src/vectorstores/pgvector.ts",
    "vectorstores/pinecone": "src/vectorstores/pinecone.ts",
    "vectorstores/prisma": "src/vectorstores/prisma.ts",
    "vectorstores/qdrant": "src/vectorstores/qdrant.ts",
    "vectorstores/redis": "src/vectorstores/redis.ts",
    "vectorstores/rockset": "src/vectorstores/rockset.ts",
    "vectorstores/singlestore": "src/vectorstores/singlestore.ts",
    "vectorstores/supabase": "src/vectorstores/supabase.ts",
    "vectorstores/tigris": "src/vectorstores/tigris.ts",
    "vectorstores/turbopuffer": "src/vectorstores/turbopuffer.ts",
    "vectorstores/typeorm": "src/vectorstores/typeorm.ts",
    "vectorstores/typesense": "src/vectorstores/typesense.ts",
    "vectorstores/upstash": "src/vectorstores/upstash.ts",
    "vectorstores/usearch": "src/vectorstores/usearch.ts",
    "vectorstores/vectara": "src/vectorstores/vectara.ts",
    "vectorstores/vercel_postgres": "src/vectorstores/vercel_postgres.ts",
    "vectorstores/voy": "src/vectorstores/voy.ts",
    "vectorstores/weaviate": "src/vectorstores/weaviate.ts",
    "vectorstores/xata": "src/vectorstores/xata.ts",
    "vectorstores/zep": "src/vectorstores/zep.ts",
    // chat_models
    "chat_models/alibaba_tongyi": "src/chat_models/alibaba_tongyi.ts",
    "chat_models/baiduwenxin": "src/chat_models/baiduwenxin.ts",
    "chat_models/bedrock": "src/chat_models/bedrock/index.ts",
    "chat_models/bedrock/web": "src/chat_models/bedrock/web.ts",
    "chat_models/cloudflare_workersai": "src/chat_models/cloudflare_workersai.ts",
    "chat_models/fireworks": "src/chat_models/fireworks.ts",
    "chat_models/friendli": "src/chat_models/friendli.ts",
    "chat_models/googlevertexai": "src/chat_models/googlevertexai/index.ts",
    "chat_models/googlevertexai/web": "src/chat_models/googlevertexai/web.ts",
    "chat_models/googlepalm": "src/chat_models/googlepalm.ts",
    "chat_models/iflytek_xinghuo": "src/chat_models/iflytek_xinghuo/index.ts",
    "chat_models/iflytek_xinghuo/web": "src/chat_models/iflytek_xinghuo/web.ts",
    "chat_models/llama_cpp": "src/chat_models/llama_cpp.ts",
    "chat_models/minimax": "src/chat_models/minimax.ts",
    "chat_models/ollama": "src/chat_models/ollama.ts",
    "chat_models/portkey": "src/chat_models/portkey.ts",
    "chat_models/premai": "src/chat_models/premai.ts",
    "chat_models/togetherai": "src/chat_models/togetherai.ts",
    "chat_models/webllm": "src/chat_models/webllm.ts",
    "chat_models/yandex": "src/chat_models/yandex.ts",
    "chat_models/zhipuai": "src/chat_models/zhipuai.ts",
    // callbacks
    "callbacks/handlers/llmonitor": "src/callbacks/handlers/llmonitor.ts",
    "callbacks/handlers/lunary": "src/callbacks/handlers/lunary.ts",
    // retrievers
    "retrievers/amazon_kendra": "src/retrievers/amazon_kendra.ts",
    "retrievers/amazon_knowledge_base": "src/retrievers/amazon_knowledge_base.ts",
    "retrievers/chaindesk": "src/retrievers/chaindesk.ts",
    "retrievers/databerry": "src/retrievers/databerry.ts",
    "retrievers/dria": "src/retrievers/dria.ts",
    "retrievers/metal": "src/retrievers/metal.ts",
    "retrievers/remote": "src/retrievers/remote/index.ts",
    "retrievers/supabase": "src/retrievers/supabase.ts",
    "retrievers/tavily_search_api": "src/retrievers/tavily_search_api.ts",
    "retrievers/vectara_summary": "src/retrievers/vectara_summary.ts",
    "retrievers/vespa": "src/retrievers/vespa.ts",
    "retrievers/zep": "src/retrievers/zep.ts",
    // query translators
    "structured_query/chroma": "src/structured_query/chroma.ts",
    "structured_query/qdrant": "src/structured_query/qdrant.ts",
    "structured_query/supabase": "src/structured_query/supabase.ts",
    "structured_query/vectara": "src/structured_query/vectara.ts",
    // cache
    "caches/cloudflare_kv": "src/caches/cloudflare_kv.ts",
    "caches/ioredis": "src/caches/ioredis.ts",
    "caches/momento": "src/caches/momento.ts",
    "caches/upstash_redis": "src/caches/upstash_redis.ts",
    // graphs
    "graphs/neo4j_graph": "src/graphs/neo4j_graph.ts",
    "graphs/memgraph_graph": "src/graphs/memgraph_graph.ts",
    // document transformers
    "document_transformers/html_to_text": "src/document_transformers/html_to_text.ts",
    "document_transformers/mozilla_readability":
      "src/document_transformers/mozilla_readability.ts",
    // storage
    "storage/cassandra": "src/storage/cassandra.ts",
    "storage/convex": "src/storage/convex.ts",
    "storage/ioredis": "src/storage/ioredis.ts",
    "storage/upstash_redis": "src/storage/upstash_redis.ts",
    "storage/vercel_kv": "src/storage/vercel_kv.ts",
    // stores
    "stores/doc/base": "src/stores/doc/base.ts",
    "stores/doc/gcs": "src/stores/doc/gcs.ts",
    "stores/doc/in_memory": "src/stores/doc/in_memory.ts",
    "stores/message/astradb": "src/stores/message/astradb.ts",
    "stores/message/cassandra": "src/stores/message/cassandra.ts",
    "stores/message/cloudflare_d1": "src/stores/message/cloudflare_d1.ts",
    "stores/message/convex": "src/stores/message/convex.ts",
    "stores/message/dynamodb": "src/stores/message/dynamodb.ts",
    "stores/message/firestore": "src/stores/message/firestore.ts",
    "stores/message/in_memory": "src/stores/message/in_memory.ts",
    "stores/message/ipfs_datastore": "src/stores/message/ipfs_datastore.ts",
    "stores/message/ioredis": "src/stores/message/ioredis.ts",
    "stores/message/momento": "src/stores/message/momento.ts",
    "stores/message/mongodb": "src/stores/message/mongodb.ts",
    "stores/message/planetscale": "src/stores/message/planetscale.ts",
    "stores/message/postgres": "src/stores/message/postgres.ts",
    "stores/message/redis": "src/stores/message/redis.ts",
    "stores/message/upstash_redis": "src/stores/message/upstash_redis.ts",
    "stores/message/xata": "src/stores/message/xata.ts",
    // memory
    "memory/chat_memory": "src/memory/chat_memory.ts",
    "memory/motorhead_memory": "src/memory/motorhead_memory.ts",
    "memory/zep": "src/memory/zep.ts",
    // indexes
    "indexes/base": "src/indexes/base.ts",
    "indexes/postgres": "src/indexes/postgres.ts",
    "indexes/memory": "src/indexes/memory.ts",
    "indexes/sqlite": "src/indexes/sqlite.ts",
    // document_loaders
    "document_loaders/web/apify_dataset": "src/document_loaders/web/apify_dataset.ts",
    "document_loaders/web/assemblyai": "src/document_loaders/web/assemblyai.ts",
    "document_loaders/web/azure_blob_storage_container":
      "src/document_loaders/web/azure_blob_storage_container.ts",
    "document_loaders/web/azure_blob_storage_file":
      "src/document_loaders/web/azure_blob_storage_file.ts",
    "document_loaders/web/browserbase": "src/document_loaders/web/browserbase.ts",
    "document_loaders/web/cheerio": "src/document_loaders/web/cheerio.ts",
    "document_loaders/web/puppeteer": "src/document_loaders/web/puppeteer.ts",
    "document_loaders/web/playwright": "src/document_loaders/web/playwright.ts",
    "document_loaders/web/college_confidential":
      "src/document_loaders/web/college_confidential.ts",
    "document_loaders/web/gitbook": "src/document_loaders/web/gitbook.ts",
    "document_loaders/web/hn": "src/document_loaders/web/hn.ts",
    "document_loaders/web/imsdb": "src/document_loaders/web/imsdb.ts",
    "document_loaders/web/figma": "src/document_loaders/web/figma.ts",
    "document_loaders/web/firecrawl": "src/document_loaders/web/firecrawl.ts",
    "document_loaders/web/github": "src/document_loaders/web/github.ts",
    "document_loaders/web/notionapi": "src/document_loaders/web/notionapi.ts",
    "document_loaders/web/pdf": "src/document_loaders/web/pdf.ts",
    "document_loaders/web/recursive_url": "src/document_loaders/web/recursive_url.ts",
    "document_loaders/web/s3": "src/document_loaders/web/s3.ts",
    "document_loaders/web/sitemap": "src/document_loaders/web/sitemap.ts",
    "document_loaders/web/sonix_audio": "src/document_loaders/web/sonix_audio.ts",
    "document_loaders/web/confluence": "src/document_loaders/web/confluence.ts",
    "document_loaders/web/couchbase": "src/document_loaders/web/couchbase.ts",
    "document_loaders/web/searchapi": "src/document_loaders/web/searchapi.ts",
    "document_loaders/web/serpapi": "src/document_loaders/web/serpapi.ts",
    "document_loaders/web/sort_xyz_blockchain":
      "src/document_loaders/web/sort_xyz_blockchain.ts",
    "document_loaders/web/spider": "src/document_loaders/web/spider.ts",
    "document_loaders/web/youtube": "src/document_loaders/web/youtube.ts",
    "document_loaders/fs/chatgpt": "src/document_loaders/fs/chatgpt.ts",
    "document_loaders/fs/srt": "src/document_loaders/fs/srt.ts",
    "document_loaders/fs/pdf": "src/document_loaders/fs/pdf.ts",
    "document_loaders/fs/docx": "src/document_loaders/fs/docx.ts",
    "document_loaders/fs/epub": "src/document_loaders/fs/epub.ts",
    "document_loaders/fs/csv": "src/document_loaders/fs/csv.ts",
    "document_loaders/fs/notion": "src/document_loaders/fs/notion.ts",
    "document_loaders/fs/obsidian": "src/document_loaders/fs/obsidian.ts",
    "document_loaders/fs/unstructured": "src/document_loaders/fs/unstructured.ts",
    "document_loaders/fs/openai_whisper_audio":
      "src/document_loaders/fs/openai_whisper_audio.ts",
    "document_loaders/fs/pptx": "src/document_loaders/fs/pptx.ts",
    // utils
    "utils/convex": "src/utils/convex.ts",
    "utils/event_source_parse": "src/utils/event_source_parse.ts",
    "utils/cassandra": "src/utils/cassandra.ts",
    // experimental
    "experimental/graph_transformers/llm":
      "src/experimental/graph_transformers/llm.ts",
    "experimental/multimodal_embeddings/googlevertexai":
      "src/experimental/multimodal_embeddings/googlevertexai.ts",
    "experimental/hubs/makersuite/googlemakersuitehub":
      "src/experimental/hubs/makersuite/googlemakersuitehub.ts",
    "experimental/chat_models/ollama_functions": "src/experimental/chat_models/ollama_functions.ts",
    // chains
    "chains/graph_qa/cypher": "src/chains/graph_qa/cypher.ts"
  },
  requiresOptionalDependency: [
    "tools/aws_sfn",
    "tools/aws_lambda",
    "tools/duckduckgo_search",
    "tools/discord",
    "tools/gmail",
    "tools/google_calendar",
    "agents/toolkits/aws_sfn",
    "callbacks/handlers/llmonitor",
    "callbacks/handlers/lunary",
    "embeddings/bedrock",
    "embeddings/cloudflare_workersai",
    "embeddings/cohere",
    "embeddings/googlevertexai",
    "embeddings/googlepalm",
    "embeddings/tensorflow",
    "embeddings/hf",
    "embeddings/hf_transformers",
    "embeddings/llama_cpp",
    "embeddings/gradient_ai",
    "embeddings/premai",
    "embeddings/zhipuai",
    "llms/load",
    "llms/cohere",
    "llms/googlevertexai",
    "llms/googlevertexai/web",
    "llms/googlepalm",
    "llms/gradient_ai",
    "llms/hf",
    "llms/raycast",
    "llms/replicate",
    "llms/sagemaker_endpoint",
    "llms/watsonx_ai",
    "llms/bedrock",
    "llms/bedrock/web",
    "llms/llama_cpp",
    "llms/writer",
    "llms/portkey",
    "llms/layerup_security",
    "vectorstores/analyticdb",
    "vectorstores/astradb",
    "vectorstores/azure_aisearch",
    "vectorstores/azure_cosmosdb",
    "vectorstores/cassandra",
    "vectorstores/chroma",
    "vectorstores/clickhouse",
    "vectorstores/closevector/node",
    "vectorstores/closevector/web",
    "vectorstores/cloudflare_vectorize",
    "vectorstores/convex",
    "vectorstores/couchbase",
    "vectorstores/elasticsearch",
    "vectorstores/faiss",
    "vectorstores/googlevertexai",
    "vectorstores/hnswlib",
    "vectorstores/hanavector",
    "vectorstores/lancedb",
    "vectorstores/milvus",
    "vectorstores/momento_vector_index",
    "vectorstores/mongodb_atlas",
    "vectorstores/myscale",
    "vectorstores/neo4j_vector",
    "vectorstores/neon",
    "vectorstores/opensearch",
    "vectorstores/pgvector",
    "vectorstores/pinecone",
    "vectorstores/qdrant",
    "vectorstores/redis",
    "vectorstores/rockset",
    "vectorstores/singlestore",
    "vectorstores/supabase",
    "vectorstores/tigris",
    "vectorstores/typeorm",
    "vectorstores/typesense",
    "vectorstores/upstash",
    "vectorstores/usearch",
    "vectorstores/vercel_postgres",
    "vectorstores/voy",
    "vectorstores/weaviate",
    "vectorstores/xata",
    "vectorstores/zep",
    "chat_models/bedrock",
    "chat_models/bedrock/web",
    "chat_models/googlevertexai",
    "chat_models/googlevertexai/web",
    "chat_models/googlepalm",
    "chat_models/llama_cpp",
    "chat_models/portkey",
    "chat_models/premai",
    "chat_models/iflytek_xinghuo",
    "chat_models/iflytek_xinghuo/web",
    "chat_models/webllm",
    "chat_models/zhipuai",
    "retrievers/amazon_kendra",
    "retrievers/amazon_knowledge_base",
    "retrievers/dria",
    "retrievers/metal",
    "retrievers/supabase",
    "retrievers/vectara_summary",
    "retrievers/zep",
    // query translators
    "structured_query/chroma",
    "structured_query/qdrant",
    "structured_query/supabase",
    "structured_query/vectara",
    "cache/cloudflare_kv",
    "cache/momento",
    "cache/upstash_redis",
    "graphs/neo4j_graph",
    "graphs/memgraph_graph",
    // document_transformers
    "document_transformers/html_to_text",
    "document_transformers/mozilla_readability",
    // storage
    "storage/cassandra",
    "storage/convex",
    "storage/ioredis",
    "storage/upstash_redis",
    "storage/vercel_kv",
    // stores
    "stores/message/astradb",
    "stores/message/cassandra",
    "stores/message/cloudflare_d1",
    "stores/message/convex",
    "stores/message/dynamodb",
    "stores/message/firestore",
    "stores/message/ioredis",
    "stores/message/ipfs_datastore",
    "stores/message/momento",
    "stores/message/mongodb",
    "stores/message/planetscale",
    "stores/message/postgres",
    "stores/message/redis",
    "stores/message/upstash_redis",
    "stores/message/xata",
    // memory
    "memory/motorhead_memory",
    "memory/zep",
    // utils
    "utils/convex",
    "utils/cassandra",
    // indexes
    "indexes/postgres",
    "indexes/sqlite",
    // document loaders
    "document_loaders/web/apify_dataset",
    "document_loaders/web/assemblyai",
    "document_loaders/web/azure_blob_storage_container",
    "document_loaders/web/azure_blob_storage_file",
    "document_loaders/web/browserbase",
    "document_loaders/web/cheerio",
    "document_loaders/web/puppeteer",
    "document_loaders/web/playwright",
    "document_loaders/web/college_confidential",
    "document_loaders/web/gitbook",
    "document_loaders/web/hn",
    "document_loaders/web/imsdb",
    "document_loaders/web/figma",
    "document_loaders/web/firecrawl",
    "document_loaders/web/github",
    "document_loaders/web/pdf",
    "document_loaders/web/notionapi",
    "document_loaders/web/recursive_url",
    "document_loaders/web/s3",
    "document_loaders/web/sitemap",
    "document_loaders/web/sonix_audio",
    "document_loaders/web/spider",
    "document_loaders/web/confluence",
    "document_loaders/web/couchbase",
    "document_loaders/web/youtube",
    "document_loaders/fs/chatgpt",
    "document_loaders/fs/srt",
    "document_loaders/fs/pdf",
    "document_loaders/fs/docx",
    "document_loaders/fs/epub",
    "document_loaders/fs/csv",
    "document_loaders/fs/notion",
    "document_loaders/fs/obsidian",
    "document_loaders/fs/unstructured",
    "document_loaders/fs/openai_whisper_audio",
    "document_loaders/fs/pptx",
    // experimental
    "experimental/multimodal_embeddings/googlevertexai",
    "experimental/hubs/makersuite/googlemakersuitehub",
    // chains
    "chains/graph_qa/cypher"
  ],
  packageSuffix: "community",
  tsConfigPath: resolve("./tsconfig.json"),
  cjsSource: "./dist-cjs",
  cjsDestination: "./dist",
  abs,
  tSupConfig: {
    name: "@langchain/community",
    dts: true,
    format: ["cjs", "esm"],
    splitting: false,
    sourcemap: false,
    clean: true,
    platform: "node",
    outDir: `dist`,
    tsconfig: `tsconfig.json`,
  }
};
