# Kushagra Jaiswal
ML Engineer & Research Lead

Faridabad, Haryana, India | kinuj768@gmail.com
linkedin.com/in/kushagra356 | github.com/Nerd-coderZero | https://nerd-coderzero.github.io
Open to remote, hybrid, or relocation

---

## Summary

ML Engineer and Research Lead with experience designing and delivering machine learning systems across healthcare AI, NLP, computer vision, and time series forecasting. Translates research into working implementations — including CNN-Transformer hybrids, CBAM attention, federated learning pipelines, and retrieval-augmented generation. Led a small research team while personally shipping 20+ projects end-to-end.

---

## Experience

**ML Engineer & Research Lead**
Megaminds IT Services — Remote
May 2025 – Present

- Architected and delivered 20+ ML systems across medical imaging, NLP, industrial time series, and LLM integration.
- Implemented research architectures into working systems: CNN-Transformer hybrids with cross-attention fusion, CBAM spatial/channel attention on ResNet backbones, bidirectional LSTM for anomaly detection, and federated learning pipelines.
- Achieved 97% accuracy on histopathology image classification, 89% on multi-class MRI classification, and 86.5% macro F1 on irony/sarcasm detection with severe class imbalance.
- Led a team of 10+ research associates: project assignment, technical mentorship, onboarding, and performance review.
- Managed client communication and requirements across delivered projects.
- Applied AI-assisted development workflows to reduce implementation time on standard tasks.
- Domains covered: medical imaging, predictive maintenance (SCADA), NLP classification, RAG pipelines, GAN-based augmentation, AutoML, federated learning.

---

## Selected Projects

**Breast Cancer Detection via Hybrid CNN-Transformer**
Hybrid architecture fusing EfficientNet-B3 convolutional feature extraction with Transformer cross-attention for histopathology image classification. Achieved 97% accuracy on held-out test set, outperforming CNN-only baseline by 11 percentage points.
Stack: PyTorch, timm, MONAI | Dataset: BreakHis (7,909 images, 4 magnifications)

**Brain Tumor Classification with CBAM Attention**
Multi-class MRI classification system using a ResNet backbone augmented with Convolutional Block Attention Module (CBAM). 89% accuracy on 4-class tumour classification.
Stack: TensorFlow, Keras

**Multi-Modal Twitter Irony Detection**
Irony and sarcasm detection system fusing fine-tuned BERT text representations with tweet metadata. Addressed 1:9 class imbalance via focal loss and threshold calibration; improved macro F1 from 71% to 86.5%.
Stack: HuggingFace Transformers, PyTorch

**Wind Turbine Predictive Maintenance (SCADA)**
Failure prediction and anomaly detection system on multivariate SCADA sensor data. Bidirectional LSTM with temporal self-attention identifies degradation signatures before critical failure events.
Stack: PyTorch, Scikit-learn

**Domain-Adaptive RAG Chatbot** *(Open Source)*
RAG system with configurable document ingestion, FAISS vector indexing, and Gemini-powered answer synthesis. Includes retrieval strategy comparison and evaluation harness.
Stack: LangChain, FAISS, Gemini API, Python | github.com/Nerd-coderZero/rag-chatbot

**IPL Match Outcome Prediction**
Pre-match win prediction for IPL cricket using team-level historical features: phase-wise run rates, win-rate differentials, death-over economy, and venue head-to-head stats. Three classifiers evaluated with strict temporal split (2008–2018 train, 2019–2024 test): Logistic Regression AUC 0.617, Random Forest 0.604, XGBoost 0.600. SHAP explainability and ablation study confirmed phase-wise run rates as the most predictive feature group.
Stack: Python, XGBoost, Scikit-learn, SHAP, Optuna, pandas

**eBPF ML Security Inference Engine**
Real-time intrusion detection system using eBPF kernel event telemetry, deployed as a containerised ML inference service on Kubernetes (Kind). Ensemble of Random Forest, LSTM Autoencoder, and Isolation Forest detects data exfiltration, lateral movement, and cryptomining patterns in synthetic test scenarios. Models baked into Docker image; exposed as REST API with sub-second inference latency.
Stack: Python, Kubernetes, Docker, Random Forest, LSTM, Isolation Forest, REST API, eBPF

---

## Technical Skills

**Frameworks & Libraries**
PyTorch, TensorFlow, Keras, Scikit-learn, HuggingFace Transformers, timm, MONAI, LangChain

**Architectures**
CNN-Transformer hybrids, Vision Transformers (ViT), CBAM attention, Bidirectional LSTM, LSTM Autoencoder, BERT fine-tuning, RAG pipelines, Isolation Forest, Federated Learning, GANs, AutoML

**Domains**
Medical Imaging, NLP & LLMs, Time Series Forecasting, Anomaly Detection, Retrieval-Augmented Generation, Intrusion Detection, Sports Analytics

**Evaluation & Experimentation**
ROC/AUC, Macro/Micro F1, SHAP explainability, Ablation studies, Optuna hyperparameter tuning, Threshold calibration, Temporal train/test splits

**Tools & Infrastructure**
Python, Git, Docker, Kubernetes, REST API, FAISS, Gemini API, Jupyter, GitHub Pages

---

## Education

**BTech, Computer Science Engineering**
J.C. Bose University of Science and Technology, YMCA — 2017–2021

**Post Graduate Program — Data Science**
UpGrad — 2023

---

## Key Metrics

- 20+ ML projects delivered end-to-end
- 10+ research associates onboarded and managed
- 97% accuracy on medical imaging (held-out test set)
- 86.5% macro F1 on heavily imbalanced NLP task
