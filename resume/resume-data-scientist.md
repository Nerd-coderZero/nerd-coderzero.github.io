# Kushagra Jaiswal
Data Scientist | ML Engineer

Faridabad, Haryana, India | kinuj768@gmail.com
linkedin.com/in/kushagra356 | github.com/Nerd-coderZero | https://nerd-coderzero.github.io
Open to remote, hybrid, or relocation

---

## Summary

Data Scientist and ML Engineer with end-to-end experience building predictive models, classification systems, and AI pipelines for clients. Delivered 20+ projects across healthcare diagnostics, NLP, industrial sensor analytics, and LLM integration. Strong across the full data science lifecycle — from data engineering and EDA through model selection, evaluation, and deployment. Comfortable operating independently and leading small teams.

---

## Experience

**ML Engineer & Research Lead**
Megaminds IT Services — Remote
May 2025 – Present

- Delivered 20+ end-to-end ML and data science projects across healthcare AI, NLP, computer vision, and industrial time series.
- Built image classification pipelines (histopathology, MRI) achieving up to 97% accuracy on held-out test sets.
- Addressed class imbalance in NLP classification using focal loss and threshold calibration, lifting macro F1 from 71% to 86.5% on a 1:9 imbalanced dataset.
- Developed SCADA-based predictive maintenance models for wind turbines using multivariate sensor time series with bidirectional LSTM.
- Built retrieval-augmented generation (RAG) systems with document ingestion, vector search, and LLM-based synthesis.
- Led a team of 10+ research associates: work allocation, quality review, onboarding, and client-facing communication.
- Applied AI-assisted development practices to reduce project delivery timelines.
- Additional work: GAN-based synthetic data augmentation, AutoML pipeline design, federated learning for healthcare model training.

---

## Selected Projects

**Breast Cancer Detection — 97% Accuracy**
End-to-end histopathology image classification pipeline. Combined EfficientNet-B3 convolutional feature extraction with Transformer cross-attention for a hybrid architecture capturing local texture and global context. Outperformed CNN-only baseline by 11 percentage points on held-out test data.
Stack: PyTorch, timm, MONAI | Dataset: BreakHis (7,909 images, 4 magnifications)

**Brain Tumor MRI Classification — 89% Accuracy**
4-class MRI classification system using a ResNet backbone augmented with Convolutional Block Attention Module (CBAM) for spatial and channel-wise feature selection on diagnostically relevant regions.
Stack: TensorFlow, Keras

**Twitter Irony & Sarcasm Detection — 86.5% Macro F1**
Multi-modal NLP classifier handling severe label imbalance (1:9 ratio). Fine-tuned BERT on tweet text, fused with engagement metadata. Used focal loss and post-hoc threshold calibration; improved macro F1 from 71% to 86.5%.
Stack: HuggingFace Transformers, PyTorch

**Wind Turbine Predictive Maintenance**
Multivariate time series model on SCADA sensor data to detect degradation patterns before failure. Bidirectional LSTM with temporal attention weights.
Stack: PyTorch, Scikit-learn, Pandas

**Domain-Adaptive RAG Chatbot** *(Open Source)*
Configurable RAG pipeline for domain-specific Q&A. Document ingestion, FAISS vector indexing, retrieval strategy comparison, and Gemini-powered generation. Includes evaluation harness.
Stack: LangChain, FAISS, Gemini API, Python | github.com/Nerd-coderZero/rag-chatbot

**IPL Match Outcome Prediction**
Pre-match win prediction for IPL cricket using team-level historical features: phase-wise run rates, win-rate differentials, death-over economy, and venue head-to-head stats. Three classifiers evaluated with strict temporal split (2008–2018 train, 2019–2024 test): Logistic Regression AUC 0.617, Random Forest 0.604, XGBoost 0.600. SHAP explainability and ablation study confirmed phase-wise run rates as the most predictive feature group.
Stack: Python, XGBoost, Scikit-learn, SHAP, Optuna, pandas

**eBPF ML Security Inference Engine**
Real-time intrusion detection system using eBPF kernel event telemetry, deployed as a containerised ML inference service on Kubernetes (Kind). Ensemble of Random Forest, LSTM Autoencoder, and Isolation Forest detects data exfiltration, lateral movement, and cryptomining patterns in synthetic test scenarios. Models baked into Docker image; exposed as REST API with sub-second inference latency.
Stack: Python, Kubernetes, Docker, Random Forest, LSTM, Isolation Forest, REST API, eBPF

---

## Technical Skills

**Machine Learning & Modeling**
Classification, Regression, Anomaly Detection, Time Series Forecasting, NLP, Computer Vision, Generative Models (GANs), Retrieval-Augmented Generation

**Frameworks & Libraries**
PyTorch, TensorFlow, Keras, Scikit-learn, HuggingFace Transformers, MONAI, timm, LangChain, Pandas, NumPy, Matplotlib

**Evaluation & Experimentation**
Cross-validation, ROC/AUC, Macro/Micro F1, Precision-Recall curves, Focal Loss, Class imbalance handling, Threshold calibration, Ablation studies, SHAP explainability, Optuna hyperparameter tuning

**Data Engineering**
Sensor/SCADA time series preprocessing, Medical image preprocessing (DICOM/PNG), Text cleaning and tokenization, Synthetic data augmentation (GANs), Feature engineering

**Tools & Infrastructure**
Python, Git, Docker, Kubernetes, REST API, FAISS, Gemini API, Jupyter Notebooks, GitHub Pages

---

## Education

**BTech, Computer Science Engineering**
J.C. Bose University of Science and Technology, YMCA — 2017–2021

**Post Graduate Program — Data Science**
UpGrad — 2023

---

## Key Metrics

- 20+ ML/DS projects delivered across 4 domains
- 10+ research associates onboarded and managed
- 97% classification accuracy on medical imaging (held-out test set)
- 86.5% macro F1 on heavily imbalanced NLP classification
